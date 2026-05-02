from django.db import models
from students.models import Student

class Assessment(models.Model):
    ASSESSMENT_TYPE = (
        ('quiz', 'Quiz'),
        ('assignment', 'Assignment'),
        ('exam', 'Exam'),
        ('mid_semester', 'Mid Semester'),
    )
    student = models.ForeignKey(Student, on_delete=models.CASCADE, db_column='student_id')
    subject = models.CharField(max_length=100, db_column='subject') 
    type = models.CharField(max_length=20, choices=ASSESSMENT_TYPE, db_column='assessment_type')
    score = models.FloatField(db_column='score')
    date = models.DateField(db_column='assessment_date')

    class Meta:
        db_table = 'assessment'

    def __str__(self):
        return f"{self.student} - {self.subject} - {self.type} - {self.score}"