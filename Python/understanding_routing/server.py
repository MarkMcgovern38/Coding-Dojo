from flask import Flask

app = Flask(__name__)

# Create a root route ("/") that responds with "Hello World!"
@app.route('/')
def hello_world():
    return 'Hello World!'

# Create a route that responds with "Dojo!"
@app.route('/dojo')
def dojo():
    return 'Dojo!'

# Create a route that responds with "Hi" and whatever name is in the URL after /say/
@app.route('/say/<string:name>') # NINJA BONUS: Ensure the names provided in the 3rd task are strings
def hello_user(name):
    return 'Hi ' + name

#Create a route that responds with the given word repeated as many times as specified in the URL
@app.route('/repeat/<string:name>/<int:num>') # NINJA BONUS: For the 4th task, ensure the 2nd element in the URL is an integer, and the 3rd element is a string
def repeat(name,num):
    return name * num



if __name__=="__main__":
    app.run(debug=True, host="localhost", port=8000)   


