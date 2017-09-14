from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"
mysql = MySQLConnector(app,'mydb')

@app.route('/')
def index():
    if (session.get('error') == False):
        session['email'] = ""
    if (session.get('error') is None):
        session['email'] = ""
        session['error'] = False
    return render_template('index.html', error=session['error'], email=session['email'])

@app.route('/emails', methods=['POST'])
def validate_and_add():
    address = request.form['email']
    email_regex = re.compile('^[\w\d.]+@[\w\d]+.[\w\d]+$')
    if email_regex.match(address) != None: # if the email is valid
        query = "INSERT INTO emails (email, created_at) VALUES (:email, NOW())"
        data = {
            'email': address
        }
        mysql.query_db(query, data)
        session['error'] = False 
        session['email'] = address
        return redirect('/success')
    else:
        session['error'] = True
        session['email'] = address
        return redirect('/')

@app.route('/success')
def show_emails():
    read_query = 'SELECT * FROM emails'
    emails = mysql.query_db(read_query)  
    for email in emails:
        email['formatted_date'] = email['created_at'].strftime('%m/%d/%Y %I:%M %p')
    return render_template('success.html', emails=emails)

@app.route('/delete', methods=['POST'])
def delete_email():
    pass
    #delete_query="DELETE FROM emails WHERE id=:id"


app.run(debug=True)