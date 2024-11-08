from django.shortcuts import render
from .models import Post
# from django.http import HttpResponse




def post_page(request, slug):
    post = Post.objects.get(slug=slug)
    return render(request, 'posts/post_page.html', {'post': post})

def posts_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'posts/posts_list.html', {'posts': posts})

# V1
# def post_page(request, slug):
#     return HttpResponse(slug)
# V1
# def posts_list(request):
#     return render(request, 'posts/posts_list.html' )
