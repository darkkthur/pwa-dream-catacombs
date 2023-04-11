from django.shortcuts import render
from .models import *
from Villian.models import *
from Character.models import *

# Create your views here.
def index(request):
    
    return render(request, 'Villian.html')