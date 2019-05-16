from flask import Flask, request, render_template
app = Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html")
   
@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")
    rem = request.form.get("rem")
    if not email or not password:
    	    return render_template("failure.html")
    return render_template("success.html",email=email)