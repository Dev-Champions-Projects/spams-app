from rest_framework.viewsets import ModelViewSet
from .models import Attendance
from .serializers import AttendanceSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from drf_spectacular.utils import extend_schema_view, extend_schema

@extend_schema_view(
    list=extend_schema(tags=['Attendance'], description="List all attendance records"),
    retrieve=extend_schema(tags=['Attendance'], description="Retrieve a single attendance record"),
    create=extend_schema(tags=['Attendance'], description="Create a new attendance record (admin only)"),
    update=extend_schema(tags=['Attendance'], description="Update an attendance record (admin only)"),
    partial_update=extend_schema(tags=['Attendance'], description="Partially update an attendance record (admin only)"),
    destroy=extend_schema(tags=['Attendance'], description="Delete an attendance record (admin only)"),
)
class AttendanceViewSet(ModelViewSet):
    queryset = Attendance.objects.all().order_by("-date")
    serializer_class = AttendanceSerializer

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [IsAdminUser()]
        return [IsAuthenticated()]
