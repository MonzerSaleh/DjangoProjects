from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout

# Create your views here.
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect("posts:list")

def login_view(request):
    '''
    a POST request verifies the credentials 
    a GET request displays the login page
    '''
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid(): 
            login(request, form.get_user())
            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect("posts:list")
    else:
        form = AuthenticationForm()
        
    return render(request, 'users/login.html', {"form": form})


def registration(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            login(request,form.save())            
            return redirect("posts:list")
    else:
        form = UserCreationForm()        
        
    return render(request, 'users/registration.html', {"form": form})

# def registration(request):
#     return HttpResponse('User Registration Page')