from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from drf_spectacular.utils import extend_schema

@extend_schema(tags=['Auth'], description="Obtain JWT access and refresh tokens")
class CustomTokenObtainPairView(TokenObtainPairView):
    pass

@extend_schema(tags=['Auth'], description="Refresh JWT access token")
class CustomTokenRefreshView(TokenRefreshView):
    pass

urlpatterns = [
    
    path('health/', views.HealthCheckView.as_view(), name='health_check'),

    # 🔐 Authentication
    path('auth/', include('users.urls')),
    path('auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),

    # 👥 Core Modules
    path('students/', include('students.urls')),
    path('assessments/', include('assessments.urls')),
    path('attendance/', include('attendance.urls')),
    path('performance/', include('performance.urls')),
    path('predictions/', include('prediction.urls')),
]





