from flask import Flask, render_template, request, redirect, session, flash
import re # regex
import random
import datetime
app = Flask(__name__)
app.secret_key = "f32fekwjofewfq"

@app.route("/")
def home():
    return render_template('index.html')

app.run(debug=True)