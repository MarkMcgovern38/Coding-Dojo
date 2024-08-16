from flask_app.config.mysqlconnection import MySQLConnection


class Ninja:
    
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']




    @classmethod
    def get_all(cls):
        query="""
        SELECT * FROM ninjas
        LEFT JOIN dojos ON dojos.id = ninjas.dojo_id
    """
        results = MySQLConnection('dojos_and_ninjas_schema').query_db(query)
        all_dojos = []
        for row in results:
            all_dojos.append(Ninja(row))
        return all_dojos
    
    @classmethod
    def add(cls, data):
        query="""
            INSERT INTO ninjas(first_name, last_name, age, dojo_id)
            VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s)
"""
        return MySQLConnection('dojos_and_ninjas_schema').query_db(query, data)
