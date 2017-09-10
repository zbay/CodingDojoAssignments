from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "f32f4rtekwjofewfq"

@app.route("/")
def home():
    return render_template('index.html', situation="You're beginning a brand new journey!")

@app.route("/left")
def left():
    return render_template('left.html')

@app.route("/right")
def right():
    return render_template('right.html')

app.run(debug=True)