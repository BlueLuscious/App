from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from stock.models import StockModel
from client.models import ClientModel

class ProductsView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('products.html')
        all_stock = StockModel.objects.all().exclude(seller=request.user.id)
        userdata = ClientModel.objects.get(id=request.user.id)        
        context = {
            "all_stock": all_stock,
            "userdata": userdata,
        }
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        pass