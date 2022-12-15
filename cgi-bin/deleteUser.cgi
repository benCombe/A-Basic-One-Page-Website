#!/usr/bin/python

import sqlite3
import sys

# Import modules for CGI handling
import cgi, cgitb
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_ticket = form.getvalue("_ticket")

def data_delete(ticket):
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM loggedIn WHERE ticket=:t",{'t':int(ticket)})
		all = cur.fetchall()
		for row in all:		
			cur.execute("DELETE FROM myguests WHERE username =:u",{'u':row[0]})
			print "User %s deleted"%(row[0])
			conn.commit()
	except Exception as e:
		print(e)
	conn.close()

print ("Content-Type: text/html\n\n")
data_delete(_ticket)

