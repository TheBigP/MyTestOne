var express=require('express');
var app=express();
app.get('/',function(req,res){
  console.log("主页GET请求");
  res.send('Hello GET');
})
app.post('/',function(req,res){
  console.log("主页POST请求");
  res.send('Hello PSOT');
})
app.get('/del_user',function(req,res){
  console.log("/del_user 响应DELETE请求");
  res.send('删除页面');
})
app.get('/list_user',function(req,res){
  console.log("/list_user 请求");
  res.send('用户列表页面');
})
app.get('/ab*cd',function(req,res){
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})
// app.use(express.static('/mygittest/mygit/node代码/node_two'));
var server = app.listen(8081,function(){
  //底下2条语句没用啊
  // var host=server.address().address
  // var port=server.address().port
  // console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
