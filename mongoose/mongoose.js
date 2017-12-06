var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/mongodb');
db.connection.on("error",function(error){
  console.log("数据库连接失败"+error);
});
db.connection.on("open",function(){
  console.log("数据库连接成功");
})
db.connection.on('disconnected',function(){
  console.log("数据库连接断开");
})

var blogSchema=new mongoose.Schema({
  title:String,
  comments:[{ body: String , date : Date}],
  date:{ type:Date , default:Date.now},
  hidden : Boolean,
  meta:{
    votes:Number,
    favs:Number
  }
})
blogSchema.add({ author:String,body:String});
// new Schema({mixed:{Schema.Types.Mixed} });
// new Schema({mixed:{}});
var blogModel = mongoose.model('Blog',blogSchema);
blogModel.insertMany([
  {title:"mongoose1",author:"W"},
  {title:"mongoose2",author:"H"}
],function(err,docs){
  if(err) console.log(err);
  console.log("保存成功"+docs);
})

// var blogEntity = new blogModel({
//   title:"Mongoose",
//   author:"L",
//   body: "Document are instance of out model.Creating them and saving "+
//   "to the database is easy",
//   comments:[{ body:"It s very cool! Thanks a lot",date : "2018.01.02"}],
//   hidden: false,
//   meta:{
//     votes:100,
//     favs:99
//   }
// })
//
// blogEntity.save(function(err,docs){
//   if(err) console.log(err);
//   console.log('保存成功'+docs);
// })
