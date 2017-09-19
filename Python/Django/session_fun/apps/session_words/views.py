# TODO: font colors, font sizes, button colors, cut off input after a space
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def form(request):
    if request.session['words'] == None:
        request.session['words'] = []
        print request.session['words']
    context = {
        'words': request.session['words']
    }
    return render(request, "form.html", context)

def newWord(request):
    if request.method == "POST":
        if request.session['words'] == None:
            request.session['words'] = []
            print request.session['words']
        size = "small"
        if request.POST['big'] == "True":
            size = "big"
        truncatedWord = ""
        try:
            truncatedWord = request.POST['word'][:request.POST['word'].index(" ")]
        except:
            truncatedWord = request.POST['word']
        if len(request.POST['word']) < 1:
            return redirect("/")
        word = {
            'word': truncatedWord,
            'time': strftime("%I:%M:%S%p, %B %d, %Y", gmtime()),
            'color': request.POST['color'],
            'size': size
        }
        new_list = request.session['words']
        new_list.append(word)
        request.session['words'] = new_list
        print request.session['words']
    return redirect("/")

def reset(request):
    request.session['words'] = []
    return redirect("/")