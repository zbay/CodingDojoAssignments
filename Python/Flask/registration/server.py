from flask import Flask, render_template, request, redirect, session, flash
import re # regex
import random
import datetime
app = Flask(__name__)
app.secret_key = "f32fekwjofewfq"

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/register", methods=['POST'])
def register():
    email=request.form['email']
    fname=request.form['fname']
    lname=request.form['lname']
    password=request.form['password']
    confirm=request.form['confirm']
    birthdate=request.form['birthdate']
    currentYr = 2017
    error = False
    if len(email) < 1:
        flash("Please fill in the email field!", "error")
        error = True
    if len(fname) < 1:
        flash("Please fill in the first name field!", "error")
        error = True
    if len(lname) < 1:
        flash("Please fill in the last name field!", "error")
        error = True
    if len(password) <= 8:
        flash("Passwords must be 9 or more characters!", "error")
        error = True
    else:
        if password != confirm:
            flash("Passwords do not match!", "error")
            error = True
    if len(confirm) < 1:
        flash("Please confirm your password!", "error")
        error = True
    if (not fname.isalpha()) or (not lname.isalpha()):
        flash("Names must contain letters, and nothing else!", "error")
        error = True
    
    emailRegex=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not emailRegex.match(email):
        flash("Invalid email address!", "error")
        error = True
    capRegex = re.compile(r'[A-Z]')
    if not capRegex.match(password):
        flash("Passwords must contain at least one capital letter!", "error")
        error = True
    if not any(char.isdigit() for char in password):
        flash("Passwords must contain at least one digit!", "error")
        error = True
    dateRegex = re.compile(r'^([0][1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}$') # too lazy to account for the differing days in months, allows 31 days for all months
    if not dateRegex.match(birthdate):
        flash("Birthdates must match the MM/DD/YYYY format!", "error")
        error = True
    else:
       if int(birthdate[-4:]) > currentYr: # too lazy to test months/days
            flash("Birthdates must not be from the future!", "error")
            error = True

    if not error:
        flash("Thanks for submitting your information.", "success")

    return redirect('/')

app.run(debug=True)