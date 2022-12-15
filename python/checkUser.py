#!/usr/bin/env python

import sqlite3

# Import modules for CGI handling
import cgi
# Create instance of FieldStorage 
form = cgi.FieldStorage()
# Get data from fields

_user = form.getvalue("uname_py")

print "Content-Type: text/html\n\n"
checkForUser(_user)
print "test"

#returns response conditional if user exists in database
def checkForUser(username):
    	conn = sqlite3.connect('../users.db')
    	cur = conn.cursor()
	cur.execute("SELECT * FROM myguests")
    	if (cur.fetchone() == username):
        	conn.close()
        	#self.send_response("Exists")
		print "Exists"
    	else:
        	conn.close()
        	#self.send_response("NoExist")
		print "NoExist"
		
