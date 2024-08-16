from flask_app import app

from flask import render_template, session, request, redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/Ninja')
def ninjas():
    return render_template('add_ninja.html', dojos=Dojo.get_dojos()) 


@app.route('/Ninja/add', methods=['POST'])
def add_ninja():
    Ninja.add(request.form)
    return redirect('/Dojo')