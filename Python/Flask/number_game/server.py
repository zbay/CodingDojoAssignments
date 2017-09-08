from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "f32fekwjofewfq"


@app.route("/")
def home():
    if not session['random']:
        session['random'] = int(random.randrange(0, 101))
        session['guess'] = None
    return render_template('index.html')

@app.route("/guess", methods=["POST"])
def guess():
    try:
        session['guess'] = int(request.form["guess"])
    except ValueError:
        session['guess'] = None
    return redirect("/")

@app.route("/reset", methods=["POST"])
def reset():
    session['random'] = random.randrange(0, 101)
    session['guess'] = None
    return redirect("/")

app.run(debug=True)