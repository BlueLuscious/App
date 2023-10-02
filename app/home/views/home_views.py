from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from stock.models import StockModel

class HomeView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('home.html')
        stock_by_interest_line = StockModel.objects.filter(type_work_line=request.user.interest_line).exclude(seller=request.user)
        context = {
            "stock": stock_by_interest_line,
        }
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        pass
    