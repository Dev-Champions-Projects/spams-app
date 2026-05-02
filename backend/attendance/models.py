from django.db import models
from students.models import Student
class Attendance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='attendance')
    date = models.DateField()
    present = models.BooleanField(default=True)
    remarks = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'attendance'


    def __str__(self):
        return f"{self.student} - {self.date} - {'Present' if self.present else 'Absent'}"