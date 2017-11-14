
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb'; 

var insertData = function(db, callback) {
    //连接到表 site
    var collection = db.collection('col');
    //插入数据
    var data = [{"title":"菜鸟教程","by":"my_first_test_inAtom"}];
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});
