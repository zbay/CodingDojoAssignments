from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "f32fekwjofewfq"

@app.route("/")
def home():
    if not session['gold']:
        session['gold'] = 0
    return render_template('index.html')

@app.route("/process_money")
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
    session['activity'] = {'gold': randomGold, 'location': building, 'time': datetime.now()}
    return redirect("/")

app.run(debug=True)