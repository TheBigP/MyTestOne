var events = require('events');
//创建一个emitter对象
var emitter = new events.EventEmitter();
//实现方法1
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
//实现方法2
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
});
//类似于Java中的赋值和调用
emitter.emit('someEvent','arg1参数','arg2参数');