var MangoClient=require('mongodb').MangoClient;
var DB_CONN_STR ='mangodb://localhost:27017/mydb';
var insertData = function(db,callback){
  var collection=db.collection('col');
  var data=[{"title":"my_first_test_inAtom","by":"wang_atom"}];
  collection.insert(data,function(err,result){
    if(err){
      console.log('Error'+err);
      return;
    }
    callback(result);
  });
}
MangoClient.connect(DB_CONN_STR,function(err,db){
  console.log("链接成功");
  insertData(db,function(result){
    console.log(result);
    db.close();
  })
})
