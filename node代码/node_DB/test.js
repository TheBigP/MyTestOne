/*
数据库连接测试成功
*/
// var mysql=require('mysql');
// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'123456',
//   database:'test'
// });
// connection.connect();
// connection.query('SELECT 1+1 AS solution',function(error, results, fields){
//   if(error) throw error;
//   console.log('The solution is:',results[0].solution);
// });

var mysql=require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'test'
});
function route(){
  connection.connect();
  var sql ='select * from email';
  connection.query(sql,function(err,result){
    if(err){
      console.log('SELECT error----',err.message);
      return;
    }
    console.log('********************SELECT*************');
    console.log(result);
    console.log('--------------------------------------------------');
  });
}
exports.route=route;
connection.end();
