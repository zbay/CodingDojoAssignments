from django.shortcuts import render, HttpResponse, redirect
from django.core import serializers 
from .models import *

def home(request):
    return render(request, "home.html", {})

def get_saved(request):
    return HttpResponse(serializers.serialize("json", Post.objects.all()), content_type="application/json") # serialize converts python object into JSON

def new_note(request):
    if request.method == "POST":
        Post.objects.create(content=request.POST['content'])
        return HttpResponse(serializers.serialize("json", Post.objects.all()), content_type="application/json")
    else:
        return redirect("/") 