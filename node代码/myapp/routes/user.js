var express = require('express');
// var request=require('request');
var router = express.Router();
/*文件上传*/
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'upload/' });
const path = require('path');
var app = express();

var db = require("../config/db");
/**
*download
*/
var url = require('url');
var http = require('http');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

router.get("/download",function(req,res,next){
  var file_url = 'F:/创世战车/包图网_106541矢量大数据时代数字风格背景/cpu.jpg';
  var DOWNLOAD_DIR = './downloads/';

  // We will be downloading the files to a directory, so make sure it's there
  // This step is not required if you have manually created the directory
  var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
  var child = exec(mkdir, function(err, stdout, stderr) {
      if (err) throw err;
      else download_file_httpget(file_url);
  });

  // Function to download file using HTTP.get
  var download_file_httpget = function(file_url) {
  var options = {
      host: url.parse(file_url).host,
      port: 80,
      path: url.parse(file_url).pathname
  };

  var file_name = url.parse(file_url).pathname.split('/').pop();
  var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

  http.get(options, function(res) {
      res.on('data', function(data) {
              file.write(data);
          }).on('end', function() {
              file.end();
              console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
          });
      });
  };
});



/**
 * 查询列表页
 */
router.get("/",function(req,res,next){
    db.query("select * from email",function(err,rows){
        if(err){
            res.render("users",{title:"用户列表",datas:[]});
        }else {
            res.render("users",{title:"用户列表",datas:rows});
        }
    });
});

/**
*下载文件
*/

router.get("/download",function(req,res,next){
    exports.download = function(req,res){
    var downloadPath = Config.outName;
    console.log('downloadPath='+downloadPath);
    res.download(downloadPath);   //express自带下载
  };

});



/**
 * 添加用户
 */
router.get("/add",function(req,res,next){
    res.render("add");
});
router.post("/add",upload.single('other'),function(req,res,next){
    var id = req.body.id;
    var name = req.body.name;
    var email_user = req.body.email_user;
    var email_touser = req.body.email_touser;
    var content = req.body.content;
    var title = req.body.title;
    var to_date = req.body.to_date;
    var other = req.body.other;

    /**
    文件上传
    */

     fs.renameSync('F:/创世战车/'+other,'F:/mygittest/mygit/node代码/myapp/upload/'+other);



    db.query("insert into email(id,name,email_user,email_touser,content,title,to_date,other) values('"+id+"','"+ name +"','"+ email_user +"','"+ email_touser +"','"+ content +"','"+ title +"','"+ to_date +"','"+ other +"')",function(err,rows){
        if(err){
            res.send("新增失败"+err);
        }else {
            res.redirect("/users");
        }
    });
});

/**
 * 删除用户
 */
router.get("/del/:id",function(req,res){
    var id = req.params.id;
    db.query("delete from email where id = " + id,function(err,rows){
        if(err){
            res.send("删除失败"+err);
        }else {
            res.redirect("/users");
        }
    });
});

/**
 * 修改
 */
router.get("/toUpdate/:id",function(req,res,next){
    var id = req.params.id;
    var sql = "select * from email where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("修改页面跳转失败");
        }else {
            res.render("update",{datas:rows});
        }
    });
});

router.post("/update",function(req,res,next){
    var id = req.body.id;
    var name = req.body.name;
    var email_user = req.body.email_user;
    var email_touser = req.body.email_touser;
    var content = req.body.content;
    var title = req.body.title;
    var to_date = req.body.to_date;

    var sql = "update email set name = '"+ name +"',email_user = '"+ email_user +"',email_touser = '"+ email_touser +"',content = '"+ content +"',title = '"+ title +"',to_date = '"+ to_date +"' where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("修改失败 " + err);
        }else {
            res.redirect("/users");
        }
    });
});


/**
 * 查询
 */
router.post("/search",function(req,res,next){
    var name = req.body.s_name;
    var sql = "select * from email";
    if(name){
        sql += " where name = '"+ name +"'";
    }


    sql.replace("and","where");
    db.query(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("users",{title:"用户列表",datas:rows,s_name:name});
        }
    });
})

module.exports = router;
