#!/usr/bin/python

import sqlite3
# Import modules for CGI handling
import cgi, cgitb
import json
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_user = form.getvalue("_uname")
_pass = form.getvalue('_pword')
_theme = form.getvalue('_theme')

def create_guest(username, password, theme):
    conn = sqlite3.connect('../users.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO myguests VALUES (?,?,?)", username, password, theme)
    conn.commit()
    print("<h1>User Creation Successful</h1>")
    conn.close()

print("Content-Type: text/html\n\n")
create_guest(_user,_pass,_theme)
