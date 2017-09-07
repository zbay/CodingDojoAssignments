from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def form():
    return render_template('index.html')

@app.route("/result", methods=["POST"])
def process():
    name = request.form['name']
    location = request.form['location']
    fave_lang = request.form['fave_lang']
    comment = request.form['comment']
    return render_template('result.html', name=name, location=location, fave_lang=fave_lang, comment=comment)

app.run(debug=True)