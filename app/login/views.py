from django.http import HttpResponse
from django.views import View
from django.template import loader

class LogInView(View):
    def get(self, request):
        template = loader.get_template('login.html')
        return HttpResponse(template.render(None, request))