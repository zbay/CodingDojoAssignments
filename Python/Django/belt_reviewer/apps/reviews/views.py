from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import *

def home(request):
    init_session(request)
    if request.session['user_id'] != "":
        return redirect("/books")
    context = {
        'name': request.session['name'],
        'alias': request.session['alias'],
        'email': request.session['email']
    }
    return render(request, "home.html", context)

def register(request):
    init_session(request)
    if request.session['user_id'] != "":
        return redirect("/books")
    if request.method == "POST":
        request.session['alias'] = request.POST['alias']
        errors = User.objects.validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['name'] = request.POST['name']
            request.session['email'] = request.POST['email']
        else:
            req = request.POST
            hash1 = bcrypt.hashpw(req['password'].encode(), bcrypt.gensalt())
            user = User.objects.create(name=req['name'], alias=req['alias'], email=req['email'], password=hash1)
            request.session['user_id'] = user.id
            return redirect("/books")
    return redirect("/")

def login(request):
    init_session(request)
    if request.session['user_id'] != "":
        return redirect("/books")
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            request.session['email'] = request.POST['email']
        else:
            user = User.objects.get(email=request.POST['email'])
            request.session['user_id'] = user.id
            request.session['alias'] = user.alias
            return redirect("/books")
    return redirect("/")  

def books(request):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")
    reviews = Review.objects.order_by("-created_at")[:3] # does this order need to be reversed???
    books = Book.objects.filter()
    context = {
        'alias': request.session['alias'],
        'books': books,
        'reviews': reviews
    }
    return render(request, "books.html", context)

def book_form(request):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")
    authors = Author.objects.all()
    context = {
        'title': request.session['title'],
        'new_author': request.session['new_author'],
        'stars': request.session['stars'],
        'review': request.session['review'],
        'user_id': request.session['user_id'],
        'authors': authors
    }
    return render(request, "new.html", context)

def new_book(request):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")  
    if request.method == "POST":  
        authorErrors = Author.objects.validator(request.POST)
        if len(authorErrors):
            for tag, error in authorErrors.iteritems():
                messages.error(request, error, extra_tags=tag)
                return redirect("/books/add")
        else:
            bookErrors = Book.objects.validator(request.POST)
            if len(bookErrors):
                for tag, error in bookErrors.iteritems():
                    messages.error(request, error, extra_tags=tag)
                request.session['title'] = request.POST['title']
                request.session['review'] = request.POST['review']
                request.session['stars'] = request.POST['stars']
                return redirect("/books/add")
            else:
                reviewErrors = Review.objects.validator(request.POST)
                if len(reviewErrors):
                    for tag, error in reviewErrors.iteritems():
                        messages.error(request, error, extra_tags=tag)
                    request.session['title'] = request.POST['title']
                    request.session['review'] = request.POST['review']
                    request.session['stars'] = request.POST['stars']
                    return redirect("/books/add")
                else:
                    a = Author.objects.filter(name=request.POST['new_author'])
                    if len(a) == 0:
                        a = Author.objects.get(name=request.POST['existing_author'])
                    else:
                        a = Author.objects.get(name=request.POST['new_author'])
                    book = Book.objects.create(title=request.POST['title'], author=a)
                    user = User.objects.get(id=request.session['user_id'])
                    review = Review.objects.create(text=request.POST['review'], stars=request.POST['stars'], book=book, reviewer = user)
        return redirect("/books/" + str(book.id))

def book(request, id):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")  
    book = Book.objects.get(id=id)
    reviews = book.reviews.all()
    print reviews
    context = {
        'book': book,
        'user_id': request.session['user_id'],
        'reviews': reviews
    }
    return render(request, "book.html", context)

def user(request, id):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")  
    user = User.objects.get(id=id)
    reviews = user.reviews.all()
    context = {
        'user': user,
        'reviews': reviews,
        'count': len(reviews)
    }
    return render(request, "user.html", context)

def delete(request, book_id, id):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")      
    review = Review.objects.get(id=id)
    if request.session['user_id'] != review.reviewer.id:
        return redirect("/")
    else:
        Review.objects.get(id=id).delete()
        if Book.objects.get(id=book_id).reviews.count() == 0:
            Book.objects.get(id=book_id).delete()
            return redirect("/books")
        return redirect("/books/" + book_id)

def new_review(request, id):
    init_session(request)
    if request.session['user_id'] == "":
        return redirect("/")   
    errors = Review.objects.validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        request.session['review'] = request.POST['review']
        request.session['stars'] = request.POST['stars']
        return redirect("/books/" + id + "/new_review")
    else:
        user = User.objects.get(id=request.session['user_id'])
        book = Book.objects.get(id=id)
        Review.objects.create(text=request.POST['review'], stars=request.POST['stars'], reviewer=user, book=book)

def logout(request):
    reset_session(request)
    return redirect("/")

def init_session(request): 
    if not 'initialized' in request.session:
        request.session['initialized'] = True
        reset_session(request)

def reset_session(request):
     request.session['user_id'] = ""
     request.session['name'] = ""
     request.session['alias'] = ""
     request.session['email'] = ""
     request.session['review'] = ""
     request.session['title'] = ""
     request.session['new_author'] = ""
     request.session['stars'] = "3"

    
"""
def alt_login(request):
    result = User.manager.login(request.POST)
    if not result[0]:
        # get errors
        for key, val in result[1].iteritems():
            messages.error(request, val)
        return redirect('/main')
    return redirect()
"""
