# TODO: make the edit user template, and handle all routes and session vars and flashes
from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"
mysql = MySQLConnector(app,'mydb')

@app.route("/")
def red():
    return redirect("/users")

@app.route("/users")
def home():
    session['fname'] = ""
    session['lname'] = ""
    session['email'] = ""
    query = "SELECT * FROM users2"
    users = mysql.query_db(query, {})
    return render_template("users.html", users=users)

@app.route("/users/new")
def newUser():
    return render_template("new_user.html")

@app.route("/users/<id>")
def user(id):
    query = "SELECT * FROM users2 WHERE id=:id LIMIT 1"
    data = {'id': id}
    user = mysql.query_db(query, data)[0]
    return render_template("user.html", user=user)

@app.route("/users/<id>/edit", methods=['GET', 'POST'])
def editUser(id):
    if request.method == 'GET':
        query = "SELECT * FROM users2 WHERE id=:id LIMIT 1"
        data = {'id': id}
        user = mysql.query_db(query, data)[0]
        return render_template("edit_user.html", user=user)
    if request.method == 'POST':  
        print "posting edits..."
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        if (len(first_name) == 0) or (len(last_name) == 0) or (len(email) == 0):
            session['first_name'] = first_name
            session['last_name'] = last_name
            session['email'] = email
            flash("None of these fields can be blank!")
            return redirect('/users/'  + id + "/edit") 
        query = "UPDATE users2 SET first_name=:first_name, last_name=:last_name, email=:email WHERE id=:id"
        data = {
            'id': id,
            'first_name': first_name,
            'last_name': last_name,
            'email': email
        }
        session['first_name'] = ""
        session['last_name'] = ""
        session['email'] = ""
        mysql.query_db(query, data)
        return redirect('/users')

@app.route("/users/create", methods=['POST'])
def addUser():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    if (len(first_name) == 0) or (len(last_name) == 0) or (len(email) == 0):
        session['first_name'] = first_name
        session['last_name'] = last_name
        session['email'] = email
        flash("None of these fields can be blank!")
        return redirect('/users/new')
    else:
        query = "INSERT INTO users2 (first_name, last_name, email, created_at) VALUES (:first_name, :last_name, :email, NOW())"
        data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email
        }
        mysql.query_db(query, data)
    return redirect('/users')

@app.route("/users/<id>/destroy")
def deleteUser(id):
    query = "DELETE FROM users2 WHERE id = :id"
    data = {"id": id}
    mysql.query_db(query, data)
    return redirect('/users')

app.run(debug=True)