var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/mydb';

//连接至服务器
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log('Connect to server');

    var collection = db.collection("col");

    collection.insertOne({title:"Mezz", by:"a gril name"},
                function (err, result) {
                    assert.equal(err, null);
                    console.log("after insert");
                    console.log(result.ops);

        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found: ");
            console.log(docs);

            db.dropCollection("col", function (err,result) {
                // assert(err, false);
                db.close();
            });
        });
    });
});
