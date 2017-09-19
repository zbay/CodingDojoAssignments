from django.shortcuts import render, HttpResponse, redirect
# the index function is called when root is visited
def index(request):
  response = "placeholder to later display all the list of blogs"
  return HttpResponse(response)

def new(request):
  response = "placeholder to display a new form to create a new blog"
  return HttpResponse(response)

def create(request):
  return redirect('/blogs')

def show(request, number):
  response = "placeholder to later display blog " + number
  return HttpResponse(response)

def edit(request, number):
  response = "placeholder to later edit blog " + number
  return HttpResponse(response)

def destroy(request, number):
  return redirect('/blogs')