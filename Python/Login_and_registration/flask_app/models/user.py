import re
from flask import flash
from flask_app.config.mysqlconnection import MySQLConnection


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:

    DB = "login_schema"

    def __init__(self,data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]


    @classmethod
    def create_user(cls,data):
        query = """
            INSERT INTO Users (first_name,last_name,email,password)
            VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s)
"""
        return MySQLConnection(cls.DB).query_db(query,data)
    
    @classmethod
    def get_by_email(cls, email):
        
        query =""" 
            SELECT * FROM Users
            WHERE Users.email = %(email)s
"""
        results = MySQLConnection(cls.DB).query_db(query, {"email": email})
        
        if results:
            return cls(results[0])
        else:
            return False
        

    @classmethod
    def get_all(cls):
        
        query =""" 
            SELECT * FROM Users
"""
        results = MySQLConnection(cls.DB).query_db(query)

        if results:
            return cls(results[0])
        else:
            return False



    @staticmethod
    def validate_user(user):
        is_valid = True

        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid email address")
            is_valid = False

        elif User.get_by_email(user['email']):
            flash('Email already used')
            is_valid = False

        if len(user['password']) < 8:
            flash("Invalid password")
            is_valid = False

        if user['password'] != user['confirm_password']:
            flash("Passwords do not match")
            is_valid = False

        if len(user['first_name']) < 2:
            flash("First name needs at least 2 characters")
            is_valid = False

        if len(user['last_name']) < 2:
            flash("Last name needs at least 2 characters")
            is_valid = False

        return is_valid

