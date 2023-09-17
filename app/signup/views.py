from django.http import HttpResponse
from django.views import View
from django.template import loader
from client.models import ClientModel
from signup.forms import SignUpForm

class SignUpView(View):
    def get(self, request):
        template = loader.get_template('signup.html')
        context = {
            "form": SignUpForm
        }
        return HttpResponse(template.render(context, request))
    
    def post(self, request):
        data = {
            "email": request.POST.get("email"),
            "username": request.POST.get("username"),
            "password": request.POST.get("password"),
            "first_name": request.POST.get("first_name"),
            "last_name": request.POST.get("last_name"),
            "cuit": request.POST.get("cuit"),
            "work_line": request.POST.get("work_line"),
            "interest_line": request.POST.get("interest_line"),
            "is_seller": request.POST.get("is_seller") == "on",
            "is_buyer": request.POST.get("is_buyer") == "on",
            "phone_number": request.POST.get("phone_number")
        }

        ClientModel.objects.create_user(**data)
        template = loader.get_template("login.html")
        return HttpResponse(template.render(data, request))

