from rest_framework import generics, permissions, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from drf_spectacular.utils import extend_schema, extend_schema_view

from .models import CustomUser
from .serializers import (
    UserSerializer,
    RegisterSerializer,
    ChangePasswordSerializer,
)

# Register
@extend_schema(tags=['Auth'], description="Register a new user account")
class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


# Profile (Me)
@extend_schema(tags=['Auth'], description="Retrieve or update the current user's profile")
class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


# Change Password
@extend_schema(tags=['Auth'], description="Change password for the current user")
class ChangePasswordView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = request.user
        if not user.check_password(serializer.validated_data['old_password']):
            return Response({"error": "Wrong password"}, status=400)
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        return Response({"message": "Password updated successfully"})


# Logout
@extend_schema(tags=['Auth'], description="Logout and blacklist the refresh token")
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logged out successfully"})
        except Exception:
            return Response({"error": "Invalid token"}, status=400)


# User Management (Admin only)
@extend_schema_view(
    list=extend_schema(tags=['Users'], description="List all users"),
    retrieve=extend_schema(tags=['Users'], description="Retrieve a user by ID"),
    create=extend_schema(tags=['Users'], description="Create a new user (admin only)"),
    update=extend_schema(tags=['Users'], description="Update a user (admin only)"),
    partial_update=extend_schema(tags=['Users'], description="Partially update a user (admin only)"),
    destroy=extend_schema(tags=['Users'], description="Delete a user (admin only)"),
)
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['username', 'email', 'first_name', 'last_name']
    ordering_fields = ['level', 'matric_no']

    @extend_schema(tags=['Users'], description="Update user role")
    @action(detail=True, methods=['patch'])
    def role(self, request, pk=None):
        user = self.get_object()
        user.role = request.data.get('role', user.role)
        user.save()
        return Response({"message": "Role updated"})

    @extend_schema(tags=['Users'], description="Deactivate a user account")
    @action(detail=True, methods=['patch'])
    def deactivate(self, request, pk=None):
        user = self.get_object()
        user.is_active = False
        user.save()
        return Response({"message": "User deactivated"})

    @extend_schema(tags=['Users'], description="Activate a user account")
    @action(detail=True, methods=['patch'])
    def activate(self, request, pk=None):
        user = self.get_object()
        user.is_active = True
        user.save()
        return Response({"message": "User activated"})
