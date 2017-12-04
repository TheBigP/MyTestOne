var _ =require('underscore');
var User = require('../module/user');
module.exports={
  add: function(req,res,next){
    var _user = new User(req.body.user);
    _user.save(function(err,user){
      if(err){

      }else{

      }
    })
  },
  delete:function(req,res){
    var id = req.query._id;
    User.remove({_id:id},function(err){
      if(err){

      }else{

      }
    })
  },
  update : function(req,res){
    var id = req.body.id;
    var userParams= req.body;
    User.findById(id,function(err,user){
      if(err){

      }else{
        _user = _.extend(user,userParams);
        _user.save(function(err,user){
          if(err){

          }else{

          }
        })
      }
    })
  },
  list:function(req,res){
    User.fetch(function=_.map(users,function(user){
      if(err){

      }else{

      }
    })
  },
};
