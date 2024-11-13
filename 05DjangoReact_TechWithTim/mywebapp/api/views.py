from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Version 2 - 
#class RoomView(generics.CreateAPIView):  # Provides an input form to create
class RoomView(generics.ListAPIView):     # Provides data in list only
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

# Version 1 - Stub
# from django.http import HttpResponse
# def main(request):
#     return HttpResponse(" Hello - I am api>views.py>main ")
