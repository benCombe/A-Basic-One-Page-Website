#!/usr/bin/env python

import sqlite3
import sys
# Import modules for CGI handling
import cgi, cgitb
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_ticket = form.getvalue("_ticket")

#returns response conditional if user exists in database

def checkForUser(ticket):
	conn = sqlite3.connect(sys.path[0] + '/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM loggedIn where ticket=:t",{'t':int(ticket)})
		all = cur.fetchall()
		if (len(all) > 0):
			print ("yes")
		else:
			print ("no")		
		conn.close()

	except Exception as e:
		print(e)		

print ("Content-Type: text/html\n")
checkForUser(_ticket)
