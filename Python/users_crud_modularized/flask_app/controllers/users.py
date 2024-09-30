from flask_app import app

from flask import render_template, session, request, redirect
from flask_app.models.user import User


USERS = []

@app.route('/users')
def users():
    users=User.get_users()
    return render_template('/read_all.html', users=users) 

@app.route('/users/add', methods=['POST'])
def add_user():
    User.add(request.form)
    return redirect('/users')

@app.route('/user/new')
def new_user():
    return render_template("create.html")
