from django.db import models
from django.contrib.auth.models import AbstractUser

class BusinessLineChoices(models.TextChoices):
    JEWELER = "Jeweler"
    BEATMAKER = "Beatmaker"
    OTHERS = "Others"

class ClientModel(AbstractUser):
    cuit = models.CharField(max_length=11)
    work_line = models.CharField(choices=BusinessLineChoices.choices, max_length=128, default=BusinessLineChoices.OTHERS.value)
    interest_line = models.CharField(choices=BusinessLineChoices.choices, max_length=128, default=BusinessLineChoices.OTHERS.value)
    is_seller = models.BooleanField(default=False)
    is_buyer = models.BooleanField(default=True)
    state = models.CharField(max_length=128)
    city  = models.CharField(max_length=128)
    postal_code = models.CharField(max_length=4)
    phone_number = models.CharField(max_length=64)