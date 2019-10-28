from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.home, name='home'),
    path('projects', include('projects.urls'))
]