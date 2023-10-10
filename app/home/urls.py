from django.urls import path
from home.views.home_view import HomeView
from home.views.products_view import ProductsView
from home.views.cart_view import CartView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('products/', ProductsView.as_view(), name='products'),
    path('cart/', CartView.as_view(), name='cart'),
]