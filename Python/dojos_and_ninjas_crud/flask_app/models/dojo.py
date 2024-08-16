from flask_app.config.mysqlconnection import MySQLConnection
from .ninja import Ninja

class Dojo:
    
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']

        self.ninjas = []



    @classmethod
    def get_dojos(cls):
        query="""
        SELECT * FROM dojos
    """
        results = MySQLConnection('dojos_and_ninjas_schema').query_db(query)
        all_dojos = []
        for row in results:
            all_dojos.append(Dojo(row))
        return all_dojos
    
    @classmethod
    def add(cls, data):
        query="""
            INSERT INTO dojos(name)
            VALUES (%(name)s)
"""
        return MySQLConnection('dojos_and_ninjas_schema').query_db(query, data)
    
    @classmethod
    def show_dojo_id(cls, data):
        query="""
        SELECT * FROM dojos
        LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id
        WHERE dojos.id = %(id)s
    """
        results = MySQLConnection('dojos_and_ninjas_schema').query_db(query,data)
        print(results)
        all_ninjas = []
        for row in results:
            
            dojo = cls(row)
            dojo.ninjas = Ninja({
                "id": row['ninjas.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "age": row['age'],
            })
            all_ninjas.append(dojo)
            
        return all_ninjas


    @classmethod
    def show_dojo(cls, data):
        query="""
        SELECT * FROM dojos
        WHERE dojos.id = %(id)s
    """
        results = MySQLConnection('dojos_and_ninjas_schema').query_db(query,data)
        print(results)
        
        for row in results:
            all_ninjas = []
            dojo = cls(row)
            all_ninjas.append(dojo)
            
        return all_ninjas