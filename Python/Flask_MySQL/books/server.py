from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "jf439ffdkl328382hrh832"
mysql = MySQLConnector(app,'mydb')

@app.route('/')
def index():
    books_query = "SELECT * FROM books"
    books = mysql.query_db(books_query, {})
    return render_template('books.html', books=books)

@app.route('/add')
def add():
    return render_template('add.html')

@app.route('/destroy/<id>')
def destroy(id):
    book_query = "SELECT * FROM books WHERE id=:id LIMIT 1"
    data = {
        'id': id
    }
    book = mysql.query_db(book_query, data)
    return render_template('destroy.html', book=book[0])

@app.route('/confirmAdd', methods=['POST'])
def confirmAdd():
    query = "INSERT INTO books (title, author, created_at) VALUES (:title, :author, NOW())"
    data = {
        'title': request.form['title'],
        'author': request.form['author']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/delete', methods=['POST'])
def delete():
    print request.form['id']
    query = "DELETE FROM books WHERE id=:id LIMIT 1"
    data = {
        "id": request.form['id']
    }
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)