var express=require('express');
var app=express();
var http = require("http");
var url = require("url");

app.use(express.static('public'));
app.get('/index.html',function(req,res){
  res.sendFile( "F:/mygittest/mygit/node代码/node_DB/view"+"/"+"index.html");
})
app.get('/selectall',function(req,res){
    function start(route){
      function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(route());
        response.write("hello world");
        response.end();
      }
      http.createServer(onRequest).listen(8081);
      console.log("Server has started.");
    }
    exports.start=start;

})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
