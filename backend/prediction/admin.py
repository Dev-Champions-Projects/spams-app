from django.contrib import admin
from .models import Prediction


@admin.register(Prediction)
class PredictionAdmin(admin.ModelAdmin):
    list_display = ("student", "ml_risk", "confidence", "created_at")
    list_filter = ("ml_risk",)