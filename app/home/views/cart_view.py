from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from stock.models import StockModel
from home.models.cart_model import CartModel
from home.services.cart_service import CartServices

template = loader.get_template('cart.html')

class CartView(LoginRequiredMixin, View):
    def get(self, request):
        context = CartServices.get_context(request.user, request.user.id)
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        stock = StockModel.objects.get(id=request.POST.get("id"))
        cart_items = CartModel.objects.filter(buyer=request.user, product=stock).first()
        
        if cart_items:
            cart_items.quantity += float(request.POST.get("quantity"))
            cart_items.save()
        else:
            data = {
                "buyer": request.user,
                "product": stock,
                "quantity": float(request.POST.get("quantity"))
            }
            CartModel.objects.create(**data)
        
        context = CartServices.get_context(request.user, request.user.id)
        return HttpResponse(template.render(context, request))
    