from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.contrib.auth.mixins import LoginRequiredMixin

class LogInView(LoginRequiredMixin, View):
    def get(self, request):
        template = loader.get_template('home.html')
        return HttpResponse(template.render(None, request))