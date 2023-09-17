from django.db import models
from django.contrib.auth.models import AbstractUser

class WorkLineChoices(models.TextChoices):
    JEWELER = "Jeweler"
    BEATMAKER = "Beat maker"
    OTHERS = "Others"

class ClientModel(AbstractUser):
    cuit = models.CharField(max_length=11)
    work_line = models.CharField(choices=WorkLineChoices.choices, max_length=128, default=WorkLineChoices.OTHERS.value)
    interest_line = models.CharField(choices=WorkLineChoices.choices, max_length=128, default=WorkLineChoices.OTHERS.value)
    is_seller = models.BooleanField(default=False)
    is_buyer = models.BooleanField(default=True)
    state = models.CharField(max_length=128)
    city  = models.CharField(max_length=128)
    postal_code = models.CharField(max_length=4)
    phone_number = models.CharField(max_length=64)
    avatar = models.ImageField(upload_to="avatar", default=None, null=True, blank=True)
    
    def __str__(self) -> str:
        return f"First name: {self.first_name}, Last name: {self.last_name}"