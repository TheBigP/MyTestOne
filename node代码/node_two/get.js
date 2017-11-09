/*
获取get请求内容
*/
// var http=require('http');
// var url=require('url');
// var util=require('util');
//
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
//   res.end(util.inspect(url.parse(req.url,true)));
// }).listen(3000);

/*
获取url的参数
*/
 // var http=require('http');
 // var url=require('url');
 // var util=require('util');
 //
 // http.createServer(function(req,res){
 //   res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
 //   var params=url.parse(req.url,true).query;
 //   res.write("网站名："+params.name);
 //   res.write("\n");
 //   res.write("网站URL："+params.url);
 //   res.end();
 // }).listen(3000);

/*
获取post请求内容
*/
// var http=require('http');
// var querystring = require('querystring');
// http.createServer(function(req,res){
//   var post='';
//   req.on('data',function(chunk){
//     post+=chunk;
//   });
//   req.on('end',function(){
//     post=querystring.parse(post);
//     res.end(util.inspect(post));
//   });
// }).listen(3000);

// var http=require('http');
// var querystring=require('querystring');
//
// var postHTML= '<html><head><meta charset="utf-8"><title>'+
// '菜鸟教程 Node.js 实例</title></head>'+
// '<body><form method="post">网站名:<input name="name"><br>'+
// '网站URL:<input name="url"><br><input type="submit"></form></body></html>'
//
// http.createServer(function(req,res){
//   var body="";
//   req.on('data',function(chunk){
//     body+=chunk;
//   });
//   req.on('end',function(){
//     body=querystring.parse(body);
//     res.writeHead(200,{'Content-Type': 'text/html; charset=utf8'});
//     if(body.name && body.url){
//       res.write("网站名"+body.name);
//       res.write("<br>");
//       res.write("网站URL"+body.url);
//     }else{
//       res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);

/*
创建web服务器
*/
// var http = require('http');
// var fs=require('fs');
// var url=require('url');
// http.createServer(function(request,response){
//   var pathname=url.parse(request.url).pathname;
//   console.log("请求的文件名:"+pathname);
//   fs.readFile(pathname.substr(1),function(err,data){
//     if(err){
//       console.log(err);
//       response.writeHead(404,{'Content-Type': 'text/html; charset=utf-8'});
//     }else{
//       response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
//       response.write(data.toString());
//     }
//     response.end();
//   });
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

/*
用node创建web客户端
*/
// var http=require('http');
// var options={
//   host:'localhost',
//   prot:'8081',
//   path:'/index.html'
// };
// var callback=function(response){
//   var body='';
//   response.on('data',function(data){
//     body+=data;
//   });
//   response.on('end',function(){
//     console.log(body);
//   });
// }
// var req=http.request(options,callback);
// req.end();

var http = require('http');

// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8089',
   path: '/index.htm'
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });

   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();
