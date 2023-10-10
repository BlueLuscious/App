from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from home.services.products_service import ProductServices

class ProductsView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('products.html')
        context = ProductServices.get_context(request.user, request.user.id)
        return HttpResponse(template.render(context, request))