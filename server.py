#!/usr/bin/env python
# -*- coding:utf-8 -*-
from wsgiref.simple_server import make_server
import tornado.ioloop
import tornado.web
import random
import smtplib
from email.mime.text import MIMEText
from email.Header import Header
from email.utils import parseaddr, formataddr
import json

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
            config={
            "from":"1641260752@qq.com",
            "to": email,             # 收件人邮箱
            "serverip": "smtp.qq.com",             # 发件服务器IP
            "serverport":"465",                      # 发件服务器Port
            "username": "1641260752@qq.com",        # 发件人用户名
            "pwd": "myryectzcjplcefh"
            }
            title = "衡阳师院快乐购【验证码】"
            
           

            check_num=random.random()
            check_num=str(check_num)
            check_num=check_num.split('.')
            check_num=check_num[1]
            check_num=check_num[0:6]
            body = "【师院快乐购用户】尊敬的用户,您好,此次的邮箱验证码为:<span style='color:#CC0000'>"+check_num+"</span><p>如果您并未发过此请求，则可能是因为其他用户误输入了您的电子邮件地址而使您收到这封邮件，那么您可以放心的忽略此邮件，无需进一步采取任何操作。</p>"
            sendMailText(title, body, config['from'], config['to'], config['serverip'], config['serverport'], config['username'], config['pwd'])
            print check_num
            self.write({'msg':"邮件已发送",'code':check_num})
        else:
            self.write("fail")

def make_app():
    return tornado.web.Application([
        (r"/res/check", MainHandler),
    ])

def formatAddr(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))

def sendMailText(title, content, sender, receiver, serverip, serverport, username, pwd):
    
    msg = MIMEText(content, _subtype="html", _charset="utf-8")    # 设置正文为符合邮件格式的HTML内容(plain为文本格式,html为html格式)
    msg['Subject'] = Header(title, "utf-8")     # 设置邮件标题
    msg['From'] = sender                        # 设置发件人
    msg['To'] = receiver                        # 设置收件人
    # msg['CC'] = receiver                        # 设置收件人

    
    s = smtplib.SMTP_SSL(serverip, serverport)      # 注意！如果是使用SSL端口，这里就要改为SMTP_SSL
    #s.ehlo()
    #s.starttls()
    s.login(username, pwd)     
    print 'sender',sender                 # 登陆邮箱
    s.sendmail(sender,receiver, msg.as_string())  # 发送邮件



if __name__ == "__main__":
    app = make_app()
    app.listen(9999)
    print "server start listen on 9999..."
    tornado.ioloop.IOLoop.current().start()
