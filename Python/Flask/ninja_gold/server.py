from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime, date, time
app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"

@app.route("/")
def home():
    if (session.get('gold') is None):
        session['activities'] = []
        session['gold'] = 0
    return render_template('index.html')

@app.route("/process_money", methods=['POST'])
def process_money():
    building = request.form['building']
    randomGold = 0
    if building == "farm":
        randomGold = int(random.randrange(10, 21))
    elif building == "cave":
        randomGold = int(random.randrange(5, 11))
    elif building == "house":
        randomGold = int(random.randrange(2, 6))
    elif building == "casino":
        randomGold = int(random.randrange(-50, 51))
    else:
        return redirect("/")
    session['gold'] += randomGold
    session['activities'].append( {'gold': randomGold, 'location': building, 'time': datetime.now().strftime("%Y/%m/%d %I:%M %p") } )
    return redirect("/")

app.run(debug=True)