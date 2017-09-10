from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'f3jk4flemfl3k4r323'

@app.route("/")
def form():
    return render_template('index.html')

@app.route("/result", methods=["POST"])
def process():
    error = False
    name = request.form['name']
    location = request.form['location']
    fave_lang = request.form['fave_lang']
    comment = request.form['comment']
    if len(name) < 1:
        flash("Please fill in the name field!")
        error = True
    if len(comment) < 1:
        flash("Please fill in the comment field!")
        error = True
    if len(comment) > 120:
        flash("Comment too long! Please make comments 120 characters or less!")
        error = True
    if error:
        return redirect("/")
    return render_template('result.html', name=name, location=location, fave_lang=fave_lang, comment=comment)

app.run(debug=True)