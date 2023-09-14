from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.template import loader

class SignUpView(View):

    def get(self, request):
        template = loader.get_template('signup.html')
        return HttpResponse(template.render(None, request))