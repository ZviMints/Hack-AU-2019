from flask import Flask, render_template, session, redirect, url_for
from flask_session import Session
from tempfile import mkdtemp
import math 


app = Flask(__name__)

app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/create")
def create():
   return render_template("create.html")
   
@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")
    rem = request.form.get("rem")
    if not email or not password:
    	    return render_template("failure.html")
    return render_template("main.html",email=email)