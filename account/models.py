from django.contrib.auth.models import AbstractUser
from django.db import models
from organization.models import Organization


class User(AbstractUser):
    telephone = models.CharField(max_length=40)
    organization = models.ManyToManyField(Organization)