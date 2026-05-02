from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('teacher', 'Teacher'),
        ('student', 'Student'),
        ('parent', 'Parent'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, db_column='role_type')
    is_active = models.BooleanField(default=True)  # important for soft deactivation

    class Meta:
        db_table = 'user'