#!/usr/bin/python

import sqlite3
import sys

table = sys.argv[1]

def data_retrieval():
	conn = sqlite3.connect(sys.path[0] + '/../users.db')
	cur = conn.cursor()
	try:
		cur.execute("SELECT * FROM %s"%(table))
		all = cur.fetchall()
		if table == "myguests":
			for row in all:
				print "User:%s\t Pass:%s\t Theme:%s"%(row[0], row[1], row[2])
		else:
			for row in all:
				print "User:%s\t Pass:%s\t Theme:%s\t Ticket:%s"%(row[0], row[1], row[2], str(row[3]))
	except Exception as e:
		print(e)
	
	conn.close()

data_retrieval()

