from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def registration(request):
    return render(request, 'users/registration.html')


# def registration(request):
#     return HttpResponse('User Registration Page')