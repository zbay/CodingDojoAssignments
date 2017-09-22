from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import User

def home(request):
    if 'logged_in' in request.session and request.session['logged_in'] == True:
        return redirect("/success")
    if not 'birthday' in request.session:
        request.session['first_name'] = ""
        request.session['last_name'] = ""
        request.session['email'] = ""
        request.session['birthday'] = "MM/DD/YYYY"
        request.session['logged_in'] = False
    context = {
        'first_name': request.session['first_name'],
        'last_name': request.session['last_name'],
        'email': request.session['email'],
        'birthday': request.session['birthday']
    }
    return render(request, "home.html", context)

def success(request):
    if request.session['logged_in'] == False:
        return redirect("/")
    context = {
        'first_name': request.session['first_name']
    }
    return render(request, "success.html", context)

def register(request):
    if request.method == "POST":
        request.session['first_name'] = request.POST['first_name']
        errors = User.objects.validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['last_name'] = request.POST['last_name']
            request.session['email'] = request.POST['email']
            request.session['birthday'] = request.POST['birthday']
            return redirect("/")
        else:
            older = User.objects.filter(email=request.POST['email'])
            screwup = False
            if len(older) > 0:
                messages.error(request, "That email is taken by another user! Please use a different address!")
                screwup = True
            if len(request.POST['password']) < 8:
                messages.error(request, "Your password is too short!")
                screwup = True
            if request.POST['password'] != request.POST['confirm_password']:
                messages.error(request, "Your passwords do not match!")
                screwup = True
            if screwup:
                request.session['last_name'] = request.POST['last_name']
                request.session['email'] = request.POST['email']
                request.session['birthday'] = request.POST['birthday']
                return redirect("/")
            hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            req = request.POST
            User.objects.create(first_name=req['first_name'], last_name=req['last_name'], email=req['email'], birthday=req['birthday'], password=hash1)
            request.session['logged_in'] = True
            return redirect("/success")
    return redirect("/")

def login(request):
    if request.method == "POST":
        user = None
        try:
            user = User.objects.get(email=request.POST['email'])
        except:
            messages.error(request, "Login -- no user with that email exists!")
            request.session['email'] = request.POST['email']
            return redirect("/")
        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
            request.session['logged_in'] = True
            return redirect("/success")
        else:
            messages.error(request, "Login -- wrong password!")
    return redirect("/")

def logout(request):
    request.session['first_name'] = ""
    request.session['last_name'] = ""
    request.session['email'] = ""
    request.session['birthday'] = ""
    request.session['logged_in'] = False
    return redirect("/")