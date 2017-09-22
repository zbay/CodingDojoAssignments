# TODO: every URL after register...
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import User

def home(request):
    session_initialize(request)
    return render(request, "home.html", {'user_id': request.session['user_id']})

def signin(request):
    session_initialize(request)
    return handle_logged(request, "signin.html", "/dashboard", request.session) # redirect to dashboard if logged in

def register(request):
    session_initialize(request)
    return handle_logged(request, "register.html", "/dashboard", request.session)   # redirect to dashboard if logged in

# these are middleware-type functions here

def session_initialize(request):
    if not 'user_id' in request.session:
        reset_session()

def reset_session(request):
    request.session['user_id'] = ""
    request.session['is_admin'] = False
    request.session['first_name'] = ""
    request.session['last_name'] = ""
    request.session['email'] = ""
    request.session['first_name'] = ""

def handle_unlogged(request, url, reroute, context):
    if request.session['user_id'] = "":
        return redirect(reroute)
    else:
        return render(request, url, context)

def handle_logged(request, url, reroute, context): # is this necessary?
    if request.session['user_id'] != "":
        return redirect(reroute)
    else:
        return render(request, url, context)    

def handle_non_admin(request, url, reroute, context):
    if request.session['is_admin']:
        return render(request, url, context)
    else:
        return redirect(reroute)