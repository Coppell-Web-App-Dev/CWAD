from django.db import models
from django.utils import timezone
# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=50)
    details = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    image_path = models.FilePathField(default="img/projects/blank.png")

