from django.shortcuts import render, HttpResponse, redirect
# the index function is called when root is visited
def index(request):
  response = "placeholder to later display all the list of surveys"
  return HttpResponse(response)

def new(request):
  response = "placeholder for users to add a new survey"
  return HttpResponse(response)