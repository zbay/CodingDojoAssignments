from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import md5 # hashes password
import os, binascii # generates hash for salt

app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"
mysql = MySQLConnector(app,'mydb')

@app.route('/')
def index():
    if not 'logged_in' in session:
        session['logged_in'] = False
    if not 'fname' in session:
        session['fname'] = ""
        session['lname'] = ""
        session['email'] = ""
    if session['logged_in'] == True:
        return redirect('/success')
    return render_template('index.html')

@app.route('/success')
def success():
    if session['logged_in'] == True:
        return render_template('success.html')
    else:
        return redirect('/')

@app.route('/logout', methods=['POST'])
def logout():
    session['logged_in'] = False
    return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    error = False
    fname = request.form['fname']
    if fname != None:
        session['fname'] = fname
    lname = request.form['lname']
    if lname != None:
        session['lname'] = lname
    email = request.form['email']
    if email != None:
        session['email'] = email
    password = request.form['password']
    confirm_pw = request.form['confirm_pw']

    if fname == None or lname == None or password == None:
        flash("Please fill out all forms!")
        return redirect('/')
        

    # basic checks
    if len(fname) < 2:
        flash("First name is too short!")
        error = True
    if len(lname) < 2:
        flash("Last name is too short!")
        error = True
    if len(password) < 8:
        flash("Password is too short!")
        error = True
    if password != confirm_pw:
        flash("Passwords do not match!")
        error = True
    
    nameRegex = re.compile('^[a-zA-Z]+$')
    emailRegex = re.compile('^[\w\d.]+@[\w\d]+.[\w\d]+$')

    # regex checks
    if (nameRegex.match(fname) == None) or (nameRegex.match(lname) == None):
        flash("Names can only contain alphabetical characters!")
        error = True
    if emailRegex.match(email) == None:
        flash("Email is in an invalid format! Did you make a typo?")
        error = True
    
    if not error:
        query = "INSERT INTO users2 (first_name, last_name, email, password, salt, created_at) VALUES (:first_name, :last_name, :email, :password, :salt, NOW())"
        salt = binascii.b2a_hex(os.urandom(15))
        print len(salt)
        data = {
            'first_name': fname,
            'last_name': lname,
            'email': email,
            'password': md5.new(password + salt).hexdigest(),
            'salt': salt
        }
        mysql.query_db(query, data)
        session['logged_in'] = True
        session['email'] = ""
        session['fname'] = ""
        session['lname'] = ""
        return redirect('/success')

    else:
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users2 WHERE email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        if user[0]['password'] == encrypted_password: # this means we have a successful login!
            session['logged_in'] = True
            session['email'] = ""
            session['first_name'] = ""
            session['last_name'] = ""
            return redirect('/success')
        else: # invalid password!
            session['email'] = email
            flash("Invalid password!")
            session['logged_in'] = False
            return redirect('/')
    else: # invalid email!
        flash("Invalid email!")
        session['logged_in'] = False
        return redirect('/')

app.run(debug=True)