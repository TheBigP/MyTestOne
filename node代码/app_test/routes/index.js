var express = require('express');
var router = express.Router();
var usr=require('dao/Connect');
router.post('/',function(req,res){
  client = usr.connectServer();
  var admin_id =req.body.admin_id;
  var admin_psd=req.body.admin_psd;
  usr.loginFun(client,admin_id,function(results){
    if(results==''){
      res.locals.error='用户不存在';
      res.render('index',{title:'smartCampus'});
      return;
    }else{
      if(results[0].admin_psd==admin_psd){
        res.locals.islogin=admin_id;
        res.cookie('islogin',res.locals.islogin,{maxAge:6000});
        res.redirect('success');
        return;
      }else{
        res.locals.error='密码错误';
        res.render('index',{title:'smartCampus'});
        retrun;
      }
    }
  });
});

router.get('/success',function(req,res,next){
  res.send('登陆成功');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
