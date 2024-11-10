from django import forms
from . import models

class CreatePost(forms.ModelForm):
    class Meta:
        model = models.Post
        # the fields we want as part of the form
        # since Post.date is auto generated we may exclude it
        fields = ['title','body','slug','banner']
        