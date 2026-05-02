from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("matric_no", "department", "level", "user")  
    search_fields = ("matric_no", "user__first_name", "user__last_name", "department")
