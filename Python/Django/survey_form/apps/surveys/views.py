from django.shortcuts import render, HttpResponse, redirect

def form(request):
    if not 'counter' in request.session:
        request.session['counter'] = 0
        request.session['name'] = ""
        request.session['fave_lang'] = ""
        request.session['location'] = ""
        request.session['comment'] = ""
    return render(request, "form.html")

def process(request):
    if request.method == "POST":
        if not 'counter' in request.session:
            request.session['counter'] = 0
            request.session['name'] = ""
            request.session['fave_lang'] = ""
            request.session['location'] = ""
            request.session['comment'] = ""
        request.session['name'] = request.POST['name']
        request.session['fave_lang'] = request.POST['fave_lang']
        request.session['location'] = request.POST['location']
        request.session['comment'] = request.POST['comment']
        request.session['counter'] += 1
        return redirect("/result")
    else:
        return redirect("/")

def result(request):
    if not 'counter' in request.session:
        request.session['counter'] = 0
        request.session['name'] = ""
        request.session['fave_lang'] = ""
        request.session['location'] = ""
        request.session['comment'] = ""
    context = {
        "counter": request.session['counter'],
        "name": request.session['name'],
        "fave_lang": request.session['fave_lang'],
        "location": request.session['location'],
        "comment": request.session['comment']
    }
    return render(request, "result.html", context)