from django.contrib import admin
from django.urls import path
from . import views

app_name = 'users'
urlpatterns = [
    path('registration/', views.registration, name="registration"),
    path('login/', views.login_view, name="login"),
    path('logout/', views.logout_view, name="logout"),   
]