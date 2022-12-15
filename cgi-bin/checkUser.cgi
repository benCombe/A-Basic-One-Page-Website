#!/usr/bin/env python

import sqlite3
import sys
# Import modules for CGI handling
import cgi, cgitb
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_user = form.getvalue("_user")


#returns response conditional if user exists in database

def checkForUser(username):
	conn = sqlite3.connect(sys.path[0] + '/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM myguests where username =:u",{'u':username})
		all = cur.fetchall()
		for row in all:
			if (row[0] == username):
				print ("Exists")
				
		conn.close()

	except Exception as e:
		print("Error: " + e)		

print ("Content-Type: text/html\n")
checkForUser(_user)
