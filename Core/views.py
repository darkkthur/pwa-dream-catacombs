from django.shortcuts import render

# Create your views here.
# Create your views here.
def index(request):
    return render(request, 'index.html')
def offline(request):
    
    return render(request, 'Offline.html')