#!/usr/bin/python

import sqlite3
import sys

conn = sqlite3.connect(sys.path[0]+'/../users.db') #Opens Connection to SQLite database file.
try:
	conn.execute('''CREATE TABLE loggedIn (
		username TEXT NOT NULL,
		password TEXT NOT NULL,
		theme	TEXT NOT NULL,
        	ticket int NOT NULL);''') #Creates the table
	conn.commit() #Saves the entries to the database
	conn.close()

except Exception as e:
	print(e)

