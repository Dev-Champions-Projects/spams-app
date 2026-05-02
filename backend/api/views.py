# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema

@extend_schema(tags=['Health'], description="Check if the server is running")
class HealthCheckView(APIView):
    def get(self, request):
        return Response({"status": "ok"})
