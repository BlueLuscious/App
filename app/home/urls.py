from django.urls import path
from home.views.home_view import HomeView
from home.views.products_view import ProductsView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('products/', ProductsView.as_view(), name='products'),
]