from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User

def index(request):
    users = User.objects.all()
    context = {
        'users': users
    }
    return render(request, "users.html", context)

def new(request):
    if not 'first_name' in request.session:
        request.session['first_name'] = ""
        request.session['last_name'] = ""
        request.session['email'] = ""
    context = {
        'first_name': request.session['first_name'],
        'last_name': request.session['last_name'],
        'email': request.session['email']
    }
    return render(request, "new.html", context)

def edit(request, id):
    user = User.objects.get(id=id)
    request.session['first_name'] = user.first_name
    request.session['last_name'] = user.last_name
    request.session['email'] = user.email
    context = {
        'id': id,
        'first_name': request.session['first_name'],
        'last_name': request.session['last_name'],
        'email': request.session['email']
    }
    return render(request, "edit.html", context)

def specific_user(request, id):
    if request.method == "GET":
        return show(request, id)
    if request.method == "POST":
        return update(request, id)

def show(request, id):
    user = User.objects.get(id=id)
    context = {
        'user': user
    }
    return render(request, "user.html", context)

def update(request, id):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email'] = request.POST['email']
        return redirect("/users/" + str(id) + "/edit")
    else:
        user = User.objects.get(id = id)
        user.first_name = request.POST['first_name']
        user.last_name = request.POST['last_name']
        user.email = request.POST['email']
        user.save()
        request.session['first_name'] = ""
        request.session['last_name'] = ""
        request.session['email'] = ""
        return redirect("/users")
    context = {}
    return redirect("/users/" + str(id))

def create(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email'] = request.POST['email']
        return redirect("/users/new")
    user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'])
    request.session['first_name'] = ""
    request.session['last_name'] = ""
    request.session['email'] = ""
    return redirect("/users/" + str(user.id))

def destroy(request, id):
    User.objects.get(id=id).delete()
    return redirect("/users")