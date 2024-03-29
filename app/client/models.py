from django.db import models
from django.contrib.auth.models import AbstractUser

class WorkLineChoices(models.TextChoices):
    JEWELER = "Jeweler"
    BEATMAKER = "Beat maker"
    OTHERS = "Others"

class ClientModel(AbstractUser):
    cuit = models.CharField(max_length=13)
    work_line = models.CharField(choices=WorkLineChoices.choices, max_length=128, default=WorkLineChoices.OTHERS.value)
    interest_line = models.CharField(choices=WorkLineChoices.choices, max_length=128, default=WorkLineChoices.OTHERS.value)
    is_seller = models.BooleanField(default=False)
    is_buyer = models.BooleanField(default=True)
    state = models.CharField(max_length=128, null=True, blank=True)
    city  = models.CharField(max_length=128, null=True, blank=True)
    postal_code = models.CharField(max_length=4, null=True, blank=True)
    phone_number = models.CharField(max_length=64, null=True, blank=True)
    avatar = models.ImageField(upload_to="avatar", default=None, null=True, blank=True)
    
    def __str__(self) -> str:
        return f"Username: {self.username} | Work Line: {self.work_line}"