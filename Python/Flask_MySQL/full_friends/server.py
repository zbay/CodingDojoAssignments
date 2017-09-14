from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime # for processing the MySQL datetime into appropriate format

app = Flask(__name__)
mysql = MySQLConnector(app,'mydb')

@app.route('/')
def index():
    query = "SELECT * FROM friends_full"                           # define your query
    friends = mysql.query_db(query)                           # run query with query_db()
    for friend in friends:
        day_num = int(friend['created_at'].strftime('%d'))
        if 4 <= day_num <= 20 or 24 <= day_num <= 30:
            suffix = "th"
        else:
            suffix = ["st", "nd", "rd"][day_num % 10 - 1]
        friend['month_day'] = friend['created_at'].strftime('%b %d') + suffix # convert date to proper format
        friend['year'] = friend['created_at'].strftime('%Y')
    return render_template('index.html', friends=friends) # pass data to our template

@app.route('/friends', methods=['POST'])
def create():
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO friends_full (name, age, created_at) VALUES (:name, :age, NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'name': request.form['name'],
             'age':  request.form['age']
           }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)