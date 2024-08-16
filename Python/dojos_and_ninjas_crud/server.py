from flask_app.controllers.dojos import dojos
from flask_app.controllers.ninjas import ninjas

from flask_app import app


if __name__ == "__main__":
    app.run(debug=True, port=8000)