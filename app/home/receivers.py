from django.dispatch import receiver
from django.db.models.signals import pre_save
from django_q.tasks import async_task
from home.models.cart_model import CartModel
from stock.service import StockServices

@receiver(pre_save, sender=CartModel)
def handler_pre_save(sender, **kwargs):
    if kwargs["instance"].product.quantity < kwargs["instance"].quantity:
        raise Exception("Stock Insuficiente")
    async_task(StockServices.substract_stock, kwargs["instance"].product, kwargs["instance"].quantity)
