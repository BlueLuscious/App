from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from stock.models import StockModel
from client.models import ClientModel

class HomeView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('home.html')
        more_stock = StockModel.objects.all().exclude(type_work_line=request.user.interest_line).exclude(seller=request.user)
        stock_by_interest_line = StockModel.objects.filter(type_work_line=request.user.interest_line).exclude(seller=request.user)
        userdata = ClientModel.objects.get(id=request.user.id)
        context = {
            "more_stock": more_stock,
            "stock_interest_line": stock_by_interest_line,
            "userdata": userdata,
        }
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        pass
    