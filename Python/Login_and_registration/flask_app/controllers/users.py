from flask_app import app
from flask import render_template, session, request, redirect, flash
from flask_bcrypt import Bcrypt
from flask_app.models.user import User

bcrypt = Bcrypt(app)

@app.route('/user')
def index():
    return render_template('login.html')

@app.route('/user/register', methods=['POST'])
def register():
    if not User.validate_user(request.form):
        return redirect('/user')
    
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)

    data= {
        **request.form, 
#        "first_name": request.form['first_name'],
#       "last_name": request.form['last_name'],
#        "email": request.form['email'],
        
        "password": pw_hash
    }
    user_id = User.create_user(data)
    session['user_id'] = user_id
    flash("You are now registered")
    return redirect('/user/success')


@app.route('/user/login', methods=['POST'])
def login():

    user_id = request.form['email'] 
    password = request.form['password']
    user_in_db = User.get_by_email(user_id)

    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/user")
    if not bcrypt.check_password_hash(user_in_db.password, password):

        flash("Invalid Email/Password")
        return redirect('/user')

    session['user_id'] = user_in_db.id

    return redirect("/user/success")


@app.route('/user/success')
def home():
    if 'user_id' not in session:
        return redirect("/logout")
    return render_template('success.html', users=User.get_all())

@app.route('/logout')
def logout():
    session.pop('email', None)
    session.pop('password', None)
    return redirect('/user')