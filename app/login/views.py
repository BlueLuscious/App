from django.http import HttpResponse
from django.shortcuts import redirect
from django.views import View
from django.template import loader
from django.contrib.auth import authenticate, login

class LogInView(View):
    def get(self, request):
        template = loader.get_template('registration/login.html')
        return HttpResponse(template.render(None, request))
    
    def post(self, request):
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/home/')
        else:
            return redirect('/login/')