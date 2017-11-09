/*
继承inherits
*/
// var util = require('util');
// function Base(){
//   this.name='base';
//   this.base=1991;
//   this.sayHello=function(){
//     console.log('Hello'+this.name);
//   };
// }
// Base.prototype.showName=function(){
//   console.log(this.name);
// };
// function Sub(){
//   this.name='sub';
// }
// util.inherits(Sub ,Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub=new Sub();
// objSub.showName();
// console.log(objSub);

/*
inspect将任意格式转换为字符串
*/
// var util=require('util');
// function Person(){
//   this.name='byvoid';
//   this.toString=function(){
//     return this.name;
//   };
// }
// var  obj=new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true));


/*
isArray(object)是数组返回true否则返回false，判断是不是数组
*/
// var util = require('util');
// var ss=util.isArray([]);
// console.log(ss);
// var sd=util.isArray(new Array);
// console.log(sd);
// var sf=util.isArray({});
// console.log(sf);

/*
util.isRegExp(object)判断是否是正则表达式，是返回true否则返回false
*/
// var util = require('util');
// var s=util.isRegExp(/some regexp/);
// console.log(s);
// var d=util.isRegExp(new RegExp('another regexp'));
// console.log(d);
// var f=util.isRegExp({});
// console.log(f);

/*
util.isDate()判断是否是日期格式，返回值同上
*/
var util = require('util');

util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false


/*
util.isError()判断是否是错误，是返回true否则返回false
*/
var util = require('util');
var s=util.isError(new Error())
  console.log(s);
var  d=util.isError(new TypeError())
  console.log(d);
var f=util.isError({ name: 'Error', message: 'an error occurred' })
  console.log(f);
