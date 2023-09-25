from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from stock.models import StockModel

class HomeView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('home.html')
        context = {
            "stock": StockModel.objects.filter(type_work_line=request.user.interest_line).exclude(seller=request.user)
        }
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        pass
    