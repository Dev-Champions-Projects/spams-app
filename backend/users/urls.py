# from django.urls import path
# from .views import RegisterView, ProtectedView

# urlpatterns = [
#     path('register/', RegisterView.as_view()),
#     path('protected/', ProtectedView.as_view()),
# ]


from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    RegisterView,
    MeView,
    ChangePasswordView,
    LogoutView,
    UserViewSet,
)

router = DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [
    # auth endpoints
    path('register/', RegisterView.as_view()),
    path('me/', MeView.as_view()),
    path('change-password/', ChangePasswordView.as_view()),
    path('logout/', LogoutView.as_view()),

    # admin CRUD
    path('', include(router.urls)),
]