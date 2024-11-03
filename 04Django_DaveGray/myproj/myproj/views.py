from django.shortcuts import render

def homepage(request):
    return render(request,'home.html')

def about(request):
    return render(request,'about.html')

####################################### v1 returns just a string
# from django.http import HttpResponse

# def homepage(request):
#     return HttpResponse('Hello world - Homepage')

# def about(request):
#     return HttpResponse('Hello world - about')