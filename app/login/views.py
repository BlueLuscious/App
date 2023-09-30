from django.http import HttpResponse
from django.shortcuts import redirect
from django.views import View
from django.template import loader
from django.contrib.auth import authenticate, login
from django.contrib import messages

template = loader.get_template('registration/login.html')

class LogInView(View):
    def get(self, request):
        return HttpResponse(template.render(None, request))
    
    def post(self, request):
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/home/')
        else:
            context = {
                'border_color': 'rgb(180, 20, 60)'
            }
            messages.error(request, 'The user is not registered or the user data is invalid')
            return HttpResponse(template.render(context, request))