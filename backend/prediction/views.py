from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from drf_spectacular.utils import extend_schema
from .utils import predict_student
from .models import Prediction
from students.models import Student
from .serializers import PredictionSerializer

@extend_schema(
    tags=['Predictions'],
    description="Generate a prediction for a student based on input data"
)
class PredictAPIView(APIView):
    def post(self, request):
        try:
            data = request.data
            student_id = data.get("student_id")

            if not student_id:
                return Response({"error": "student_id is required"}, status=400)

            student = Student.objects.get(id=student_id)
            result = predict_student(data)

            prediction = Prediction.objects.create(
                student=student,
                ca_score=result["ca_score"],
                ca_percentage=result["ca_percentage"],
                rule_based_risk=result["rule_based_risk"],
                ml_risk=result["ml_risk"],
                confidence=result["confidence"],
                recommendation=result["recommendation"]
            )

            return Response({
                "message": "Prediction successful",
                "data": PredictionSerializer(prediction).data
            })

        except Student.DoesNotExist:
            return Response({"error": "Student not found"}, status=404)

        except Exception as e:
            return Response({"error": str(e)}, status=500)


@extend_schema(
    tags=['Predictions'],
    description="View prediction history for all students"
)
class PredictionListAPIView(generics.ListAPIView):
    queryset = Prediction.objects.all().order_by("-created_at")
    serializer_class = PredictionSerializer
