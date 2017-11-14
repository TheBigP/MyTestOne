var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//在控制台显示信息的模块
var logger = require('morgan');
//获取浏览器中农cookie中的内容
var cookieParser = require('cookie-parser');
//一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，Express框架中就是使用这个模块做为请求体解析中间件
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/user');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 载入中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//设置静态文件目录
console.log("**************************************");
console.log(express.static(path.join(__dirname, 'public')));
console.log("**************************************");
//配置路由，（'自定义路径'，上面设置的接口地址）
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8081,function(){
  console.log("开始监听0..........");
})

module.exports = app;
