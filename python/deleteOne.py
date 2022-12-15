#!/usr/bin/python

import sqlite3
import sys

table = sys.argv[2]

def data_delete(user):
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("DELETE FROM %s WHERE username=:u"%(table),{'u':user})
		print("User deletion Successful")
		conn.commit()
		conn.close()

	except Exception as e:
		print(e)

data_delete(sys.argv[1])

