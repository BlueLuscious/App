from django.db import models
from stock.models import StockModel
from client.models import ClientModel

class CartModel(models.Model):
    buyer = models.ForeignKey(ClientModel, on_delete=models.CASCADE)
    product = models.ForeignKey(StockModel, on_delete=models.CASCADE)
    quantity = models.FloatField(max_length=128, default=1)
    
    class Meta:
        unique_together = ('buyer', 'product')
