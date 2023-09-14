from django.contrib import admin
from client.models import ClientModel

@admin.register(ClientModel)
class ClientAdmin(admin.ModelAdmin):
    pass