from django import forms
from client.models import ClientModel

class SignUpForm(forms.ModelForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'First Name'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Last Name'}))
    cuit = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Cuit'}))
    phone_number = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Phone Number'}))
    email = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Email'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
    repeat_password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Repeat Password'}))

    class Meta:
        model = ClientModel
        fields = ['first_name', 'last_name', 'cuit', 'phone_number', 'email', 'username', 'password', 'repeat_password', 'is_seller', 'work_line', 'is_buyer', 'interest_line', 'state', 'city', 'postal_code']
        