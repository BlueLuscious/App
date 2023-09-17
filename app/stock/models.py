from django.db import models
from client.models import ClientModel, WorkLineChoices

class StockModel(models.Model):
    seller = models.ForeignKey(ClientModel, on_delete=models.CASCADE, limit_choices_to={'is_seller': True})
    type_work_line = models.CharField(choices=WorkLineChoices.choices, max_length=128, default=WorkLineChoices.OTHERS.value)
    name = models.CharField(max_length=128)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    quantity = models.FloatField(max_length=128, default=1)
    image = models.ImageField(upload_to="products/", default=None, blank=True)
    description = models.TextField(max_length=256)
    code = models.CharField(max_length=12, unique=True)
    expiration = models.DateTimeField(null = True, default=None)    

    class Meta:
        unique_together = ("seller", "code")

    def __str__(self) -> str:
        return f"Product name: {self.name}, Seller:  {self.seller}"