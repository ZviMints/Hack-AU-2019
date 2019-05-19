#!/usr/bin/env python
# -- coding: utf-8 --
import codecs
import course 
import datetime
import mysql.connector
from flask import Flask, request, render_template
app = Flask(__name__)

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

@app.route("/database")
def database():
   mydb = mysql.connector.connect(user="team", password="aA12345678!", host="SG-HackAU-634-master.servers.mongodirector.com",
   port=3306, database="hackau",collation='utf8_general_ci',use_unicode=True, charset='utf8')
   mycursor =  mydb.cursor()
   list = []
   listofstrings = []
   mycursor.execute("SELECT Name_Lecturer, courses.Name_Courses, courses.Course_ID, "
   +"Time_Begin, Time_End ,courses.Credits ,semester,day from lectures INNER JOIN courses on lectures.Course_ID = courses.Course_ID where department = 'מדעי המחשב';")
   myresult = mycursor.fetchall()
   # print(myresult)
   for row in myresult:
      # print(u'{} {} {} {} {} ({}'.format(*i[:]))
      c = course.course(u'{}'.format(row[0]),u'{}'.format(row[1]),row[2],row[3],row[4],row[5],row[6])
      list.append(c)
      listofstrings.append(c.myfunc())
   return render_template('database.html', list=listofstrings)
