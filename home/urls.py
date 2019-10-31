from . import views
from projects.views import ProjectListView
from django.urls import path, include

urlpatterns = [
    path('', views.home, name='home'),
    path('projects', ProjectListView.as_view(), name='projects'),
    path('about', views.about, name='about')
]