from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from home.services.cart_service import CartServices

template = loader.get_template('cart.html')

class CartView(LoginRequiredMixin, View):
    def get(self, request):
        context = CartServices.get_context(request.user.id)
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        context = CartServices.get_context(request.user.id)
        return HttpResponse(template.render(context, request))
    