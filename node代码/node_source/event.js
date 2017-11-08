//引用
var EventEmitter = require('events').EventEmitter;
//定义的方法
var event = new EventEmitter();
//用on实现方法，控制台输出
event.on('some_event',function(){
	console.log('some_event 事件触发');
});
//定时开始（1秒后）
setTimeout(function(){
	event.emit('some_event');
},1000);