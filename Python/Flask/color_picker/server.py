from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html', red="255", green="255", blue="255")

@app.route("/colored", methods=["POST"])
def changed():
    return render_template('index.html', red=request.form["red"], green=request.form["green"], blue=request.form["blue"])

app.run(debug=True)