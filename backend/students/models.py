from django.db import models
from users.models import CustomUser

class Student(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, db_column='user_id')
    matric_no = models.CharField(max_length=20, unique=True, db_column='matriculation_number')
    department = models.CharField(max_length=100, db_column='department')
    level = models.CharField(max_length=20, db_column='academic_level')
    date_of_birth = models.DateField(null=True, blank=True)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        db_table = 'student'

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - {self.matric_no}"
    






    