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

var blogSchema=mongoose.Schema({
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

blogModel.find({$where: 'this.comments.length > 10 || this.authorlength > 5'},function(err,docs){
  if(err) console.log(err);
  console.log('search+where+++++'+docs);
});
blogModel.$where(function(){return this.comments.length > 10 || this.author.length > 5 ;});

// blogModel.find({ title: { $regex: "Mongoose.+","$options":"i"}},function(err,docs){
//   if(err) console.log(err);
//   console.log('search++++++'+docs);
// });

// blogModel.and([
//   {title: {$regex: "Mongoose.+","$options":"i"}},
//   {meta.votes:{$lt:100}}
// ].sort({meta.votes:1}).exec(function(err,docs){
//   if(err) console.log(err);
//   console.log('查询结果：'+ docs);
// }))


// blogModel.remove({author:"H"},function(err,docs){
//   if(err) console.log(err);
//   console.log('删除成功'+docs);
// })

// blogModel.update({title: "Mongoose"},{author:"G"},{multi:true},function(err,docs){
//   if(err) console.log(err);
//   console.log('更改成功'+docs);
// })

/**
找了2个多小时 才知道 mongoDB不支持他妈的 嵌套查询 一句话的事 找了2个多小时
得把子属性的全部信息列出来  还得 把 该子属性的 父名 作为索引 才能查的到
*/
// , meta.votes:100  不好使的. 不知道为什么（.）不好使
// blogModel.find({title:"Mongoose" },{title:1,author:1,body:1},function(err,docs){
//   if(err) console.log(err);
//   console.log('查询结果'+docs);
// })

// blogModel.insertMany([
//   {title:"mongoose1",author:"W"},
//   {title:"mongoose2",author:"H"}
// ],function(err,docs){
//   if(err) console.log(err);
//   console.log("保存成功"+docs);
// })


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
