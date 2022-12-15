#!/usr/bin/python

import sqlite3

# Import modules for CGI handling
import cgi
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_user = form.getvalue('uname')
_pass = form.getvalue('pword')
_theme = form.getvalue('theme')

print ("Content-Type: text/html\n\n")

def sql_database():
    conn = sqlite3.connect('./users.db') #Opens Connection to SQLite database file.
    conn.execute('''CREATE TABLE myguests (
		username TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL,
        	theme TEXT NOT NULL DEFAULT "purple");''') #Creates the table
    conn.commit() #Saves the entries to the database
    conn.close()

def create_guest(username, password, theme):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    params = (username, password, theme)
    cursor.execute("INSERT INTO myguests VALUES (?,?,?)",params)
    conn.commit()
    print('User Creation Successful')
    conn.close()

def checkForUser(username):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM myguests WHERE username =:user",{'user':username})
    #if true, return true
    conn.close()

def data_retrieval(username,password):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM myguests WHERE username =:user",{'user':username})
    try:
        if cur.fetchone()[1] == password:      
            print("User Found")
    except:
            print("User Not found")
    conn.close()

"""
def data_delete(username):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute(DELETE FROM myguests WHERE username =:NAME,{'NAME':username})
    print("User deletion Successful")
    conn.commit()
    conn.close()
"""
data_retrieval(_user,_pass)

