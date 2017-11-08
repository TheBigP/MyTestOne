
//copy方法
// var buffer1=new Buffer('ABC');
// var buffer2=new Buffer(2);
// buffer1.copy(buffer2);
// console.log("buffer2 content"+buffer2.toString());

//按位置截取字符串
// var buffer1=new Buffer('runoob');
// var buffer2=buffer1.slice(0,5);
// console.log("buffer2 content:"+buffer2.toString());

//查看缓冲区长度
// var buffer=new Buffer('www.runoob.com');
// console.log("buffer length:"+buffer.length);

/*
从流中读取数据
读入流
*/
// var fs=require("fs");
// var data='';
// //创建可读流
// var readerStream = fs.createReadStream('input.txt');
// //设置编码utf-8
// readerStream.setEncoding('UTF8');
// //处理流事件
// readerStream.on('data',function(chunk){
// 	data+=chunk;
// });
// readerStream.on('end',function(){
// 	console.log(data);
// });
// readerStream.on('error',function(err){
// 	console.log(err.stack);
// });
// console.log("程序执行完毕");

/*
写入流
*/
// var fs=require("fs");
// var data='菜鸟教程：www.runoob.com';
// //创建一个可以写入的流，写入output.txt中
// var writerStream =fs.createWriteStream('output.txt');
// writerStream.write(data,'UTF8');
// writerStream.end();
// writerStream.on('finish',function(){
// 	console.log("写入成功");
// });
// writerStream.on('error',function(err){
// 	console.log(err.stack);
// });
// console.log("程序执行完毕");

/*
管道流
*/
// var fs=require("fs");
// var readerStream=fs.createReadStream('input.txt');
// var writerStream=fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log("程序执行完毕");

/*
链式流和管道流
压缩文件
*/
// var fs=require("fs");
// var zlib=require('zlib');
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("文件压缩成功");

/*
链式流和管道流
解压文件
*/
// var fs=require("fs");
// var zlib=require('zlib');
// fs.createReadStream('input.txt.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('input.txt'));

// console.log("文件解压成功");

/*
创建一个模块
hello.js中的方法的调用
*/
// var Hello=require('./hello');
// hello = new Hello();
// hello.setName('Wang');
// hello.sayHello();

var http = require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
}).listen(8888);















