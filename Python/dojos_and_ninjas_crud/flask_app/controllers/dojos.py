from flask_app import app

from flask import render_template, session, request, redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

DOJOS = []

@app.route('/Dojo')
def dojos():
    return render_template('/dojos.html', dojos=Dojo.get_dojos()) 

@app.route('/Dojo/add', methods=['POST'])
def add_dojo():
    Dojo.add(request.form)
    return redirect('/Dojo')

@app.route('/Dojo/<int:id>')
def show_dojo(id):
    data = {
        "id":id
    }
    return render_template('dojo_show.html', dojos=Dojo.show_dojo_id(data), dojo=Dojo.show_dojo(data)) 
