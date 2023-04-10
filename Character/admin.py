from django.contrib import admin
from .models import Automovil, AutomovilSpec, Contrato

# Register your models here.


class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'update_date')
    ordering = ('title',)
    search_fields = ('title',)
    
admin.site.register(Automovil)
admin.site.register(AutomovilSpec)
admin.site.register(Contrato)
