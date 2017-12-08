var User = require('./model').User;
var Post = require('./model').Post;
var Comment = require('./model').Comment;

var tom = new User({name: 'Tom', age: 19});
var test = new Post({title: 'test', content: 'wakaka'});
var walala = new Comment({content: 'walala'});

tom.save().then(function(user) {
  test.author = user;
  walala.author = user;
  return Promise.all([test.save(), walala.save(), user]);
}).spread(function(post, comment, user) {
  user.posts.push(post);
  user.comments.push(comment);
  post.comments.push(comment);
  return Promise.all([user.save(), post.save()]);
}).spread(function() {
  console.log('success');
}).catch(function(reason) {
  console.log(reason);
});

// var User = require('./new_mongoose.js').User;
// var Post= require('./new_mongoose.js').Post;
// var Comment=require('./new_mongoose.js').Comment;
// var Promise=require('bluebird');
//
// var user_tom = new User({name:'Tom',age:19});
// var user_jerry=new User({name:'Jerry',age:22});
// var user_david=new User({name:'David',age:15});
// var post_test=new Post({title:'test',content:'wahahawahaha'});
// var comment_wa=new Comment({content:'wakaka'});
//
// Promise.all([user_tom.save(),user_jerry.save(),user_david.save()])
// .spread(function(utom,ujerry,udavid){
//   post_test.author=utom;
//   comment_wa.author = utom;
//   return Promise.all([post_test.save(),comment_wa.save(),utom,udavid]);
// }).spread(function(post,comment,utom,udavid){
//   utom.posts.push(post);
//   utom.comments.push(comment);
//   udavid.comments.push(comment);
//   post.comments.push(comment);
//  return Promise.all([utom.save(), post.save(), udavid.save()]);
// }).spread(function() {
//   console.log('success');
// }).catch(function(reason) {
//   console.log(reason);
// });
