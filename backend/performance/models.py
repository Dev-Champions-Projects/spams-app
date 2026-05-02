from django.db import models
from students.models import Student

class Performance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='performances')
    gpa = models.FloatField()
    # term = models.CharField(max_length=20)
    year = models.IntegerField(null=True, blank=True)
    remarks = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'performance'

    def __str__(self):
        return f"{self.student} - GPA: {self.gpa}"