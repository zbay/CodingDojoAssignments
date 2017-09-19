from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def random(request):
    if not 'counter' in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    context = {
        "count": request.session['counter'],
        "random_word": get_random_string(length=14)
    }
    return render(request, "random.html", context)

def reset(request):
    request.session['counter'] = 0
    return redirect("/random_word")