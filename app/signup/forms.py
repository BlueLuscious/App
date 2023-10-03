from django import forms
from client.models import ClientModel

class SignUpForm(forms.ModelForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'First Name'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'Last Name'}))
    cuit = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'Cuit'}))
    phone_number = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'Phone Number'}))
    email = forms.CharField(widget=forms.EmailInput(attrs={'class': 'input', 'placeholder': 'Email'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input', 'placeholder': 'Password'}))
    repeat_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input', 'placeholder': 'Repeat Password'}))
    is_seller = forms.BooleanField(widget=forms.CheckboxInput(attrs={'class': 'input'}), required=False, initial=False)
    is_buyer = forms.BooleanField(widget=forms.CheckboxInput(attrs={'class': 'input'}), required=False, initial=True)

    class Meta:
        model = ClientModel
        fields = ['first_name', 'last_name', 'cuit', 'phone_number', 'email', 'username', 'password', 'repeat_password', 'is_seller', 'work_line', 'is_buyer', 'interest_line', 'state', 'city', 'postal_code', 'avatar']
        