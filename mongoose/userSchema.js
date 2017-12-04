var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/testDataBase')

var UserSchema = new Schema({
  uid:{
    type:string,
    required:true,
    unique,true
  },
  logLevel:{
    type:String,
    default:'info'
  },
  meta:{
    createAt:{
      type:Data,
      default:Date.now()
    },
    updateAt:{
      type:Data,
      default:Date.now()
    }
  }
});

userSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.updateAt=this.meta.createAt=Date.now();
  }else{
    this.meta.updateAt=Date.now();
  }
  next()
});

userSchema.static={
  fetch:function(cb){
    return this.find({})
    .sort('meta.createAt')
    .exec(cb)
  },
  findById:function(id,cb){
    return this.findOne({_id:id})
    .sort('meta.createAt')
    .exec(cb);
  },
  findByUid:function(uid,cb){
    return this.findOne({uid:uid})
    .sort('meta.createAt')
    .exec(cb);
  }
};

module.exports = userSchema;
