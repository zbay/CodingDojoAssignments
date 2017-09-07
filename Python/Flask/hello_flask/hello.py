from flask import Flask, render_template
app = Flask(__name__) # Global variable __name__ tells Flask whether or not we are running the file

@app.route("/") # The "@" symbol designates a "decorator" which attaches the following function to the '/' route. This means that whenever we send a request to localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    return render_template('helloworld.html')

app.run(debug=True)