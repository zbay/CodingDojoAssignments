from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def nothing():
    return render_template('index.html')

@app.route("/ninja")
def ninjas():
    return render_template('ninjas.html')

@app.route("/ninja/<color>")
def specific_ninja(color):
    return render_template('ninja.html', color=color)

app.run(debug=True)