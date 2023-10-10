from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin
from home.services.home_service import HomeServices

class HomeView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('home.html')
        context = HomeServices.get_context(request.user, request.user.id)
        return HttpResponse(template.render(context, request))  