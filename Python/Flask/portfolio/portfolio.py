from flask import Flask, render_template
app = Flask(__name__) # Global variable __name__ tells Flask whether or not we are running the file

@app.route("/") # The "@" symbol designates a "decorator" which attaches the following function to the '/' route. This means that whenever we send a request to localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    return render_template('welcome.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

app.run(debug=True)