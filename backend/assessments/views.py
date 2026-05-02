from rest_framework import viewsets, permissions
from .models import Assessment
from .serializers import AssessmentSerializer

from drf_spectacular.utils import extend_schema_view, extend_schema

@extend_schema_view(
    list=extend_schema(tags=['Assessments'], description="List all assessments"),
    retrieve=extend_schema(tags=['Assessments'], description="Retrieve a single assessment"),
    create=extend_schema(tags=['Assessments'], description="Create a new assessment"),
    update=extend_schema(tags=['Assessments'], description="Update an assessment"),
    partial_update=extend_schema(tags=['Assessments'], description="Partially update an assessment"),
    destroy=extend_schema(tags=['Assessments'], description="Delete an assessment"),
)
class AssessmentViewSet(viewsets.ModelViewSet):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer
    permission_classes = [permissions.IsAuthenticated]
