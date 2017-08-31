#!/usr/bin/env python
# -*- coding:utf-8 -*-
from wsgiref.simple_server import make_server
import tornado.ioloop
import tornado.web
import json
import MySQLdb

def make_app():
    return tornado.web.Application([
        (r"/find_pwd$", MainHandler),
    ])


class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Access-Control-Allow-Headers', '*')
     

    def get(self):
    	self.set_header("Content-Type", "text/plain")
        email = self.request.arguments
    	email = email['email'][0]
        print email
        if email:
           
            self.write({'msg':"密码已返回"})
        else:
            self.write("fail")


def selectData():
    try:
	conn=MySQLdb.connect(host='localhost',user='root',passwd='',db='jd',port=3306)
	cur=conn.cursor()
	cur.execute('select * from user')
	cur.close()
	conn.close()
    except MySQLdb.Error,e:
	print "Mysql Error %d: %s" % (e.args[0], e.args[1])

if __name__ == "__main__":
    app = make_app()
    app.listen(9090)
    print "server start listen on 9090..."
    tornado.ioloop.IOLoop.current().start()
