from django import forms
from client.models import ClientModel

class SignUpForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    repeat_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = ClientModel
        fields = ['email', 'username', 'first_name', 'last_name', 'cuit', 'password', 'repeat_password', 'work_line', 'interest_line', 'is_seller', 'is_buyer', 'state', 'city', 'postal_code', 'phone_number']
        