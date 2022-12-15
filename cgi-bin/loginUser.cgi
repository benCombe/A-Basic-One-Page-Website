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

def addToLogin(username, password, theme):
	logCon = sqlite3.connect(sys.path[0]+'/../users.db')
	logCur = logCon.cursor()

	try:
		logCur.execute("SELECT * FROM loggedIn where username=:u",{'u':username})
		inLog = logCur.fetchall()
		for row in inLog:
			if row[0] == username:
				return str(row[3])
		
	except Exception as e:
		print(e)


	while True:
		try:
			x = 0
			ticket = getTicket()
			logCur.execute("SELECT * FROM loggedIn where ticket=:t",{'t':ticket})
			logAll = logCur.fetchall()
			for row in logAll:
        			if row[2] == ticket:
					x = 1
					
			if x!=1:	
				params = (username, password, theme, ticket)
				logCur.execute("INSERT INTO loggedIn VALUES (?,?,?,?)", params)
			 	logCon.commit()
				return str(ticket)
				break
		except Exception as e:
        		print(e)
			break
	logCon.close()

def data_retrieval(username,password):
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM myguests WHERE username=:u",{'u':username})
		all = cur.fetchall()
		for row in all:
			if row[0] == username and row[1] == password: 
				print("valid:"+str(row[2])[0]+addToLogin(username, password, row[2]))

	except Exception as e:
		print(e)

	conn.close()

print("Content-Type: text/html\n")        
data_retrieval(_user,_pass)
