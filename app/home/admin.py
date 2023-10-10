from django.contrib import admin
from home.models.cart_model import CartModel

# Register your models here.
@admin.register(CartModel)
class CartModel(admin.ModelAdmin):
    pass