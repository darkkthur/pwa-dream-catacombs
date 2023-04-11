from django.urls import path, include
from . import views

from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns  

app_name = 'Villian'

urlpatterns = [
    path('', views.index, name='villian'),
]
urlpatterns += staticfiles_urlpatterns()
 