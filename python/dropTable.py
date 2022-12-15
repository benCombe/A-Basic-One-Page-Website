#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('./users.db') #Opens Connection to SQLite database file.
conn.execute("DROP table loggedIn")
conn.commit() #Saves the entries to the database
conn.close()


