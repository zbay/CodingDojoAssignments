from django.shortcuts import render, HttpResponse, redirect
products = [{'id': '0', 'name': 'Dojo Tshirt', 'price': 19.99},
{'id': '1', 'name': 'Dojo Sweater', 'price': 29.99},
{'id': '2', 'name': 'Dojo Cup', 'price': 4.99},
{'id': '3', 'name': 'Algorithm Book', 'price': 49.99}]

def store(request): # amadon
    if not 'counter' in request.session:
        request.session['counter'] = 0
        request.session['spent'] = 0
        request.session['last_charge'] = 0
    context = {
        'products': products
    }
    return render(request, "store.html", context)

def confirm(request): # amadon/checkout
    context = {
        'session': request.session
    }
    return render(request, "confirm.html", context)

def buy(request): # amadon/buy
    if request.method == "POST":
        price = 0
        price_set = False
        for product in products:
            if product['id'] == request.POST['productid']:
                price_set = True
                price = float(product['price'])
        if price_set: # does nothing if the product ID wasn't located
            request.session['counter'] += int(request.POST['quantity'])
            request.session['last_charge'] = float(request.POST['quantity']) * price
            request.session['spent'] += request.session['last_charge']
    return redirect("/amadon/checkout")