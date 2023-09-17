from django.urls import path
from login.views import LogInView

urlpatterns = [
    path('', LogInView.as_view(), name='login'),
]