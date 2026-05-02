from django.db import models
from students.models import Student


class Prediction(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    
    ca_score = models.FloatField()
    ca_percentage = models.FloatField(default=0.0)

    rule_based_risk = models.CharField(max_length=20)

    ml_risk = models.CharField(max_length=20)
    confidence = models.FloatField()

    recommendation = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student} - {self.ml_risk}"

    class Meta:
        db_table = "prediction"
