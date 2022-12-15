#!/usr/bin/env python

import sqlite3
import sys

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

checkForUser(sys.argv[1])
