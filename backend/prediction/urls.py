from django.urls import path
from .views import PredictAPIView, PredictionListAPIView

urlpatterns = [
    path('predict/', PredictAPIView.as_view(), name='predict'),
    path('history/', PredictionListAPIView.as_view(), name='history'),
]