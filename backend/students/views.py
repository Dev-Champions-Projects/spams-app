from rest_framework import viewsets, permissions
from .models import Student
from .serializers import StudentSerializer
from rest_framework.filters import SearchFilter
from drf_spectacular.utils import extend_schema_view, extend_schema

@extend_schema_view(
    list=extend_schema(tags=['Students'], description="List all students"),
    retrieve=extend_schema(tags=['Students'], description="Retrieve a single student by ID"),
    create=extend_schema(tags=['Students'], description="Create a new student record"),
    update=extend_schema(tags=['Students'], description="Update a student record"),
    partial_update=extend_schema(tags=['Students'], description="Partially update a student record"),
    destroy=extend_schema(tags=['Students'], description="Delete a student record"),
)
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    filter_backends = [SearchFilter]
    search_fields = ['matric_no', 'department']
    permission_classes = [permissions.IsAuthenticated]
