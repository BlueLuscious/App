from django.contrib import admin
from home.models.cart_model import CartModel

@admin.register(CartModel)
class CartAdmin(admin.ModelAdmin):
    pass