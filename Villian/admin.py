from django.contrib import admin

# Register your models here.
from .models import Informacion

# Register your models here.


class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'update_date')
    ordering = ('title',)
    search_fields = ('title',)
    
admin.site.register(Informacion)
