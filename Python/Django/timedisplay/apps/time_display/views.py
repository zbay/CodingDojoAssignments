from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def index(request):
  currentTime = gmtime()
  context = {
  "date": strftime("%b %d, %Y", currentTime),
  "time": strftime("%I:%M %p", currentTime) # gmtime() gets the current time, to be formatted by strftime
  }
  return render(request,'index.html', context)