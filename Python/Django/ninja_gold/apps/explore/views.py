from django.shortcuts import render, HttpResponse, redirect
import random
from time import gmtime, strftime

def home(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
        request.session['activities'] = []
    context = {
        'gold': request.session['gold'],
        'activities': request.session['activities']
    }
    print context
    return render(request, "home.html", context)

def get_money(request, location):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    randomGold = 0
    activity_list = request.session['activities']
    lost = False
    if location == "farm":
        randomGold = int(random.randrange(10, 21))
    if location == "cave":
        randomGold = int(random.randrange(5, 11))
    if location == "house":
        randomGold = int(random.randrange(2, 6))
    if location == "casino":
        randomGold = int(random.randrange(-50, 51))

    request.session['gold'] += randomGold
    if randomGold < 0:
        lost = True
        randomGold *= -1
    activity_list.append( {'gold': randomGold, 'location': location, 'time': strftime("%Y/%m/%d %I:%M %p", gmtime()), 'lost': lost } )
    request.session['activities'] = activity_list
    return redirect("/")