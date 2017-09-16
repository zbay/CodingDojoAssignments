from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import md5 # hashes password
import os, binascii # generates hash for salt

app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"
mysql = MySQLConnector(app,'wall')

@app.route("/")
def home():
    if 'user_id' not in session:
        session['user_id'] = False
        session['email'] = ""
        session['first_name'] = ""
        session['last_name'] = ""
    if session['user_id'] != False:
        session['email'] = ""
        return redirect("/wall")
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        if user[0]['password'] == encrypted_password: # this means we have a successful login!
            session['user_id'] = user[0]['id']
            session['first_name'] = user[0]['first_name']
            session['last_name'] = user[0]['last_name']
            session['email'] = ""
            return redirect('/wall')
        else: # invalid password!
            session['email'] = email
            flash("Invalid password!")
            session['user_id'] = False
            return redirect('/')
    else: # invalid email!
        session['email'] = email
        flash("Invalid email!")
        session['user_id'] = False
        return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    error = False
    fname = request.form['fname']
    if fname != None:
        session['first_name'] = fname
    lname = request.form['lname']
    if lname != None:
        session['last_name'] = lname
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
        query = "INSERT INTO users (first_name, last_name, email, password, salt, created_at) VALUES (:first_name, :last_name, :email, :password, :salt, NOW())"
        salt = binascii.b2a_hex(os.urandom(15))
        data = {
            'first_name': fname,
            'last_name': lname,
            'email': email,
            'password': md5.new(password + salt).hexdigest(),
            'salt': salt
        }
        user = mysql.query_db(query, data)
        session['user_id'] = user
        session['email'] = ""
        session['last_name'] = ""
        return redirect('/wall')

    else:
        return redirect('/')

@app.route("/logout")
def logout():
    session['user_id'] = False
    session['first_name'] = ""
    session['last_name'] = ""
    session['email'] = ""
    return redirect('/')

@app.route("/wall")
def wall():
    # get all messages and comments
    if session['user_id'] == False:
        return redirect('/')
    msg_query = "SELECT m.id AS id, user_id, message, m.updated_at AS date, CONCAT(u.first_name, ' ', u.last_name) AS author FROM messages AS m JOIN users AS u ON u.id = m.user_id ORDER BY date DESC LIMIT 20"
    messages = mysql.query_db(msg_query, {})
    for message in messages:
        message['date'] = message['date'].strftime('%B %d %Y')
        comment_query = "SELECT c.id AS id, c.comment AS comment, c.updated_at AS date, CONCAT(u.first_name, ' ', u.last_name) AS author FROM comments c JOIN users AS u ON c.user_id = u.id WHERE c.message_id=:message_id ORDER BY date DESC LIMIT 50"
        data = {'message_id': message['id']}
        comments = mysql.query_db(comment_query, data)
        for comment in comments:
            comment['date'] = comment['date'].strftime('%B %d %Y')
        message['comments'] = comments
    return render_template("wall.html", messages=messages)

@app.route("/message", methods=['POST'])
def message():
    # post a new message to the wall
    query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
    data = {
        'user_id': session['user_id'],
        'message': request.form['msg']
    }
    mysql.query_db(query, data)
    return redirect("/wall")

@app.route("/comment", methods=['POST'])
def comment():
    # post a new comment to the a specific message
    query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) VALUES (:message_id, :user_id, :comment, NOW(), NOW())"
    data = {
        'message_id': request.form['message_id'],
        'user_id': session['user_id'],
        'comment': request.form['comment']
    }
    mysql.query_db(query, data)
    return redirect("/wall")

@app.route("/delete", methods=['POST'])
def delete():
    # delete your own comment, if made within the last 30 minutes
    return redirect("/wall")

app.run(debug=True)