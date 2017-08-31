/**
 * Created by Administrator on 2016/12/26.
 */
var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url)
    if (req.url == '/data' && req.method == 'POST') {
        var data = '';
        req.on('readable', function() {
            //初始判断是否有数据可读
            console.log('readable...');
        });
        //request继承自eventEmitter, on方法， 监听事件
        req.on('data', function(chunk) { //chunk标示数据读取一段段的
            //标示有数据的时候触发
            console.log("123" + chunk)
            data += chunk;
            console.log("456" + data);
        });
        //数据读取完成的时候触发
        req.on('end', function() {
            console.log('读取解析完成', data);
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            }); //写入http客户端响应头部
            var querystring = require('querystring');
            data = querystring.parse(data);
            // console.log('data:', data);
            //res.end() 必须传入string/buffer
            data.head_img=data.head_img.replace(/^data:image\/\w+;base64,/, "");
            var path ='head_img/'+ Date.now() +'.png';
            var dataBuffer = new Buffer(data.head_img, 'base64'); //把base64码转成buffer对象，
            console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));
            fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
                if(err){
                    console.log(err);
                }else{
                   Updata(data.user,path,function(data){
                    res.end(data);
                   });
                  
                }
            })

        });
    }
}).listen(3000, function() {
    console.log('server listen on 3000');
});



function Updata(user, data,callback) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'jd',
    });
    connection.connect();
    var userModSql = 'UPDATE users SET head_img = ? WHERE user = ?';
    var userModSql_Params = [data, user];
    connection.query(userModSql, userModSql_Params, function(err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return false;
        }
        

        console.log('----------UPDATE-------------');
        console.log('UPDATE affectedRows', result.affectedRows);
        console.log('******************************');
        if(parseInt(result.affectedRows)>0)
        {
            callback('成功');
        }
        else
        {
           callback('失败');
        }
    });
    connection.end();
}