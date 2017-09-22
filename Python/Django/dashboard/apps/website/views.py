# TODO: every URL after register...
# gave up on this project because time constraints...
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import User

def home(request):
    session_initialize(request)
    return render(request, "home.html", {'user_id': request.session['user_id']})

def signin(request):
    if request.method == "POST":
        session_initialize(request)
        errors = User.objects.login_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['email'] = request.POST['email']
            return handle_logged(request, "signin.html", "/dashboard", request.session) # redirect to dashboard if logged in
        else:
            user = User.objects.get(email=request.POST['email'])
            request.session['user_id'] = user.id 
            request.session['is_admin'] = (user.level == "9")
            return redirect("/dashboard")
    session_initialize(request, 'email')
    return handle_logged(request, "signin.html", "/dashboard", request.session) # redirect to dashboard if logged in

def register(request):
    if request.method == "POST":
        session_initialize(request)
        errors = User.objects.init_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['email'] = request.POST['email']
            request.session['first_name'] = request.POST['first_name']
            request.session['last_name'] = request.POST['last_name']
            return handle_logged(request, "register.html", "/dashboard", request.session) # redirect to dashboard if logged in
        else:
            req = request.POST
            hashed = bcrypt.hashpw(req['password'].encode(), bcrypt.gensalt())
            num_users = len(User.objects.all())
            level = 0
            if num_users == 0:
                level = 9
            user = User.objects.create(email=req['email'], first_name=req['first_name'], last_name=req['last_name'], password=hashed, level=level)
            request.session['user_id'] = user.id 
            request.session['is_admin'] = (user.level == 9)
            return redirect("/dashboard")
    session_initialize(request, 'email')
    return handle_logged(request, "register.html", "/dashboard", request.session) # redirect to dashboard if logged in

def new(request):
    if request.method == "POST":
        session_initialize(request)
        if request.session['is_admin'] == True:
            errors = User.objects.init_validator(request.POST)
            if len(errors):
                for tag, error in errors.iteritems():
                    messages.error(request, error, extra_tags=tag)
                request.session['email'] = request.POST['email']
                request.session['first_name'] = request.POST['first_name']
                request.session['last_name'] = request.POST['last_name']
        else:
            req = request.POST
            hashed = bcrypt.hashpw(req['password'].encode(), bcrypt.gensalt())
            user = User.objects.create(email=req['email'], first_name=req['first_name'], last_name=req['last_name'], password=hashed, level=0)
            return redirect("/dashboard")
    return handle_non_admin(request, "new.html", "/dashboard", request.session)

def user(request, id):
    u = User.objects.filter(id=id)
    context = {
        'user': u[0],
        'user_id': request.session['user_id']
    }
    if len(u) > 0:
        return handle_unlogged(request, "user.html", "/signin", context)
    else:
        return redirect("/dashboard")

def message(request):
    if request.method == "POST":
        errors = Message.objects.validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
        else:
            req = request.POST
            s = User.get(id=request.session['user_id'])
            r = User.get(id=req['recipient_id'])
            Message.objects.create(text=req['message'], sender=s, recipient=r)
    return redirect("/users/show/" + request.POST['recipient_id'])

def comment(request):
    if request.method == "POST":
        errors = Comment.objects.validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
        else:
            req = request.POST
            s = User.get(id=request.session['user_id'])
            m = Message.get(id=req['message_id'])
            Comment.objects.create(text=req['comment'], sender=s, parent=m)
    return redirect("/users/show/" + request.POST['recipient_id'])

def admin_edit(request, id):
    user = User.objects,get(id=id)
    context = {
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'level': str(user.level),
        'is_admin': request.session['is_admin']
    }
    if request.method == "GET":
        return handle_non_admin('edit.html', '/users/edit', context)
    if request.method == "POST":
        errors = User.objects.update_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return handle_non_admin('edit.html', '/users/edit', context)
        else:
            req = request.POST
            user.email = req['email']
            user.first_name = req['first_name']
            user.last_name = req['last_name']
            user.level = req['level']
            user.save()
        return redirect('/dashboard')

def logout(request):
    reset_session(request)
    return redirect("/")

# these are middleware-type functions here

def session_initialize(request, name="user_id"):
    if not name in request.session:
        reset_session()

def reset_session(request, full=True):
    if full:
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
    if request.session['is_admin'] == True:
        return render(request, url, context)
    else:
        return redirect(reroute)