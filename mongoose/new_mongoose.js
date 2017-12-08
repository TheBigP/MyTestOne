var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/population');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  age: Number,
  posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});
var User = mongoose.model('user', userSchema);

var postSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'user'},
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});
var Post = mongoose.model('post', postSchema);

var commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'user'}
})
var Comment = mongoose.model('comment', commentSchema);

exports.User = User;
exports.Post = Post;
exports.Comment = Comment;


// var mongoose = require('mongoose');
// var Schema   = mongoose.Schema;
//
// var UserSchema = new Schema({
//     name  : { type: String, unique: true },
//     posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
// });
// var User = mongoose.model('User', UserSchema);
//
// var PostSchema = new Schema({
//     poster   : { type: Schema.Types.ObjectId, ref: 'User' },
//     comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//     title    : String,
//     content  : String
// });
// var Post = mongoose.model('Post', PostSchema);
//
// var CommentSchema = new Schema({
//     post      : { type: Schema.Types.ObjectId, ref: "Post" },
//     commenter : { type: Schema.Types.ObjectId, ref: 'User' },
//     content   : String
// });
// var Comment = mongoose.model('Comment', CommentSchema);
//
// mongoose.connect('mongodb://localhost/population-test', function (err){
//     if (err) throw err;
//     createData();
// });
//
// function createData() {
//
//     var userIds    = [new ObjectId, new ObjectId, new ObjectId];
//     var postIds    = [new ObjectId, new ObjectId, new ObjectId];
//     var commentIds = [new ObjectId, new ObjectId, new ObjectId];
//
//     var users    = [];
//     var posts    = [];
//     var comments = [];
//
//     users.push({
//         _id   : userIds[0],
//         name  : 'aikin',
//         posts : [postIds[0]]
//     });
//     users.push({
//         _id   : userIds[1],
//         name  : 'luna',
//         posts : [postIds[1]]
//     });
//     users.push({
//         _id   : userIds[2],
//         name  : 'luajin',
//         posts : [postIds[2]]
//     });
//
//     posts.push({
//         _id      : postIds[0],
//         title    : 'post-by-aikin',
//         poster   : userIds[0],
//         comments : [commentIds[0]]
//     });
//     posts.push({
//         _id      : postIds[1],
//         title    : 'post-by-luna',
//         poster   : userIds[1],
//         comments : [commentIds[1]]
//     });
//     posts.push({
//         _id      : postIds[2],
//         title    : 'post-by-luajin',
//         poster   : userIds[2],
//         comments : [commentIds[2]]
//     });
//
//     comments.push({
//         _id       : commentIds[0],
//         content   : 'comment-by-luna',
//         commenter : userIds[1],
//         post      : postIds[0]
//     });
//     comments.push({
//         _id       : commentIds[1],
//         content   : 'comment-by-luajin',
//         commenter : userIds[2],
//         post      : postIds[1]
//     });
//     comments.push({
//         _id       : commentIds[2],
//         content   : 'comment-by-aikin',
//         commenter : userIds[1],
//         post      : postIds[2]
//     });
//
//     User.create(users, function(err, docs) {
//         Post.create(posts, function(err, docs) {
//             Comment.create(comments, function(err, docs) {
//             });
//         });
//     });
// }

// var mongoose=require('mongoose');
// mongoose.Promise=require('bluebird');
//
// var Schema = mongoose.Schema;
// var userSchema = new Schema({
//   name: String,
//   age: Number,
//   posts:[{type:Schema.Types.ObjectId,ref:'post'}],
//   comments:[{type:Schema.Types.ObjectId,ref:'comment'}]
// });
//
// var User = mongoose.model('user',userSchema);
//
// var postSchema =new Schema({
//   title:String,
//   content:String,
//   author:{type:Schema.Types.ObjectId,ref:'comment'},
//   comments:[{type:Schema.Types.ObjectId,ref:'comment'}]
// });
// var Post=mongoose.model('post',postSchema);
//
// var commentSchema=new Schema({
//   content:String,
//   author:{type:Schema.Types.ObjectId,ref:'user'}
// })
// var Comment = mongoose.model('comment',commentSchema);
//
// exports.User = User;
// exports.Post= Post;
// exports.Comment=Comment;
