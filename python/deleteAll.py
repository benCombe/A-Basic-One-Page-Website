#!/usr/bin/python

import sqlite3
import sys

table = sys.argv[1]

def data_delete():
	conn = sqlite3.connect(sys.path[0]+'/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("DELETE FROM %s"%(table))
		print("Cleared " + str(cur.rowcount) + " entries from " + table)
		conn.commit()
		conn.close()

	except Exception as e:
		print(e)

data_delete()

