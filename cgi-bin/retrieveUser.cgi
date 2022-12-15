#!/usr/bin/python

import sqlite3
import sys
from random import random

# Import modules for CGI handling
import cgi, cgitb
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_user = form.getvalue("_user")
_pass = form.getvalue("_pass")

def getTicket():
	min = 1000000000000
	max = 9999999999999
	return int((max-min)*random()+min)

def addToLogin(username, password):
	logCon = sqlite3.connect(sys.path[0]+'/../users.db')
	logCur = logCon.cursor()
	print("opened loggedIn")
	while true:
		try:
			x = 0
			ticket = getTicket()
			print(ticket)
			logCur.execute("SELECT * FROM loggedIn where ticket=:t",{'t':ticket})
			all = logCur.fetchall()
			for row in all:
        			if row[2] == ticket:
					x = 1
					
			if x!=1	
				params = (username, password, ticket)
				logCur.execute("INSERT INTO loggedIn VALUES (?,?,?)", params)
			 	logCon.commit()
				print(username + " added to loggedIn")
				break
		except Exception as e:
        		print(e)
			break
	logCon.close()

def data_retrieval(username,password):
	print "Received: %s + %s"%(username,password)
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM myguests WHERE username=:u",{'u':username})
		all = cur.fetchall()
		for row in all
			if row[0] == username and row[1] == password: 
				addToLogin(username, password)
				print("valid:" + ticket)
		else:
			print("invalidPW")

	except:
		print("invalid")

	conn.close()

        
print ("Content-Type: text/html\n\n")
print(_user)
data_retrieval(_user,_pass)
