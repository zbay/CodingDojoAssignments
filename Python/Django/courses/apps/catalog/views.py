from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Course, Comment, Description

def home(request):
    if not 'name' in request.session:
        request.session['name'] = ""
        request.session['description'] = ""
        request.session['comment'] = ""
    courses = Course.objects.all()
    context = {
        'courses': courses,
        'name': request.session['name'],
        'description': request.session['description']
    }
    return render(request, "home.html", context)

def delete(request, id):
    course = Course.objects.get(id=id)
    context = {
        'course': course
    }
    return render(request, "delete.html", context)

def actual_delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect("/courses")

def create(request):
    if request.method == "POST":
        errors = Course.objects.validator(request.POST)
        screwup = False
        if len(errors):
            screwup = True
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['name'] = request.POST['name']
            request.session['description'] = request.POST['description']
        errors = Description.objects.validator(request.POST)
        if len(errors):
            screwup = True
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['name'] = request.POST['name']
            request.session['description'] = request.POST['description']
        if not screwup:
            d = Description.objects.create(text=request.POST['description'])
            Course.objects.create(name=request.POST['name'], description=d) 
            request.session['name'] = ""
            request.session['description'] = ""
    return redirect("/courses")

def comments(request, id):
    course = Course.objects.get(id=id)
    comments = course.comments.all()
    if not 'comment' in request.session:
        request.session['name'] = ""
        request.session['description'] = ""
        request.session['comment'] = ""
    context = {
        'comments': comments,
        'name': course.name,
        'id': id,
        'comment': request.session['comment']
    }
    return render(request, "comments.html", context)

def new_comment(request, id):
    if request.method == "POST":
        errors = Comment.objects.validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['comment'] = request.POST['comment']
        else:
            c = Course.objects.get(id=id)
            Comment.objects.create(text=request.POST['comment'], course=c)
    return redirect("/courses/comments/" + str(id))