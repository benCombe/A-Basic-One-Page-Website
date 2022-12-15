#!/usr/bin/python

import sqlite3
import sys

_user = sys.argv[1]
print(_user)
_pass = sys.argv[2]
print(_pass)
_theme = sys.argv[3] 
print(_theme)
	
def create_guest(username, password, theme):
#	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	conn = sqlite3.connect('./users.db')
	cursor = conn.cursor()
	params = (username, password, theme)
	try:
		cursor.execute("INSERT INTO myguests VALUES (?,?,?)", params)
		print("Exe OK")
		conn.commit()
		print("User Creation Successful")
		conn.close()

	except Exception as e:
		print(e)
	

create_guest(_user,_pass,_theme)
