#!/usr/bin/python

import sqlite3
import sys
# Import modules for CGI handling
import cgi, cgitb

# Create instance of FieldStorage 
form = cgi.FieldStorage()

# Get data from fields
_user = form.getvalue("_user")
_pass = form.getvalue("_pass")
_theme = form.getvalue("_theme")

def create_guest(username, password, theme):
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cursor = conn.cursor()
	params = (username, password, theme)
	try:
		cursor.execute("INSERT INTO myguests VALUES (?,?,?)", params)
		conn.commit()
		print("User Creation Successful")
		conn.close()

	except Exception as e:
		print("DB ERROR: " + e)

print("Content-Type: text/html\n")
create_guest(_user,_pass,_theme)
