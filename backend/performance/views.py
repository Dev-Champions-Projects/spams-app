from rest_framework.viewsets import ModelViewSet
from .models import Performance
from .serializers import PerformanceSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from drf_spectacular.utils import extend_schema_view, extend_schema

@extend_schema_view(
    list=extend_schema(tags=['Performance'], description="List all performance records"),
    retrieve=extend_schema(tags=['Performance'], description="Retrieve a single performance record"),
    create=extend_schema(tags=['Performance'], description="Create a new performance record (admin only)"),
    update=extend_schema(tags=['Performance'], description="Update a performance record (admin only)"),
    partial_update=extend_schema(tags=['Performance'], description="Partially update a performance record (admin only)"),
    destroy=extend_schema(tags=['Performance'], description="Delete a performance record (admin only)"),
)
class PerformanceViewSet(ModelViewSet):
    queryset = Performance.objects.all().order_by("-year")
    serializer_class = PerformanceSerializer

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [IsAdminUser()]
        return [IsAuthenticated()]
