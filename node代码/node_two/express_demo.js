var express=require('express');
var app=express();
//斜线'/'应该是端口号127.0.0.1:8080/的斜线
app.get('/',function(req,res){
  res.send('Hello World');
})
var server = app.listen(8081,function(){
  var host=server.address().address
  var port=server.address().port
  console.log("应用实例，访问地址为 http://%s:%s+",host,port)
})
