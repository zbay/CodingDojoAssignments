from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "f32fekwjofewfq"

@app.route("/", methods=["GET"])
def home():
    if session["count"]:
        session["count"] += 1
    else:
        session["count"] = 1
    return render_template('index.html')

@app.route("/double", methods=["POST"])
def double():
    session["count"] += 1
    return redirect("/")

@app.route("/reset", methods=["POST"])
def reset():
    session["count"] = 0
    return redirect("/")  

app.run(debug=True)