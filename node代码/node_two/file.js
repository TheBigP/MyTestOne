/*
程序的异步读写(readFile)和同步读写(readFileSync)
*/
// var fs=require("fs");
// fs.readFile('input.txt',function(err,data){
//   if(err){
//     return console.error(err);
//   }
//   console.log("异步读取:"+data.toString());
// });
// var data = fs.readFileSync('input.txt');
// console.log("同步读取："+data.toString());
// console.log("程序结束");

/*
同步打开文件open异步打开文件是stat
*/
// var fs=require("fs");
// console.log("准备打开文件！");
// fs.open('input.txt','r+',function(err,fd){
//   if(err){
//       return console.error(err);
//     }
//     console.log("文件打开成功！！！");
// });

// var fs = require('fs');
// fs.stat('F:/mygittest/mygit/node代码/node_two/file.js', function (err, stats) {
//     console.log(stats.isFile());         //true
// })

/*
检测是否是文件和目录
*/
// var fs=require("fs");
// console.log("准备打开文件！！！");
// fs.stat('input.txt',function(err,stats){
//   if(err){
//     return console.error(err);
//   }
//   console.log(stats);
//   console.log("读取文件信息成功！！");
//   console.log("是否为文件"+stats.isFile());
//   console.log("是否为目录？"+stats.isDirectory());
// });

/*
写入和读取的测试代码
*/
// var  fs=require("fs");
// console.log("准备开始写入！！！");
// fs.writeFile('test-1','测试数据',function(err){
//   if(err){
//     return console.log(err);
//   }
//   console.log("数据写入成功");
//   console.log("------------------------");
//   console.log("读取写入的数据");
//   fs.readFile('test-1',function(err,data){
//     if(err){
//       return console.log(err);
//     }
//     console.log("异步读取成功"+data.toString());
//   });
// });

/*
按字节读取文件
*/
// var fs =require("fs");
// var  buf=new Buffer(1024);
// console.log("准备打开已存在的文件");
// fs.open('input.txt','r+',function(err,fd){
//   if(err){
//     return console.error(err);
//   }
//   console.log("文件打开成功");
//   console.log("准备读取文件：");
//   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//     if(err){
//       console.log(err);
//     }
//     console.log(bytes+"字节被读取!!!");
//     if(bytes>0){
//       console.log(buf.slice(0,bytes).toString());
//     }
//   })
// })

/*
读取后并关闭文件
*/
// var fs =require("fs");
// var  buf=new Buffer(1024);
//
// console.log("准备打开文件！！！");
// fs.open('input.txt','r+',function(err,fd){
//   if(err){
//     return console.error(err);
//   }
//   console.log("文件打开成功");
//   console.log("准备读取文件");
//   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//     if(err){
//       return console.log(err);
//     }
//     if(bytes>0){
//       console.log(buf.slice(0,bytes).toString());
//     }
//     fs.close(fd,function(err){
//       if(err){
//         console.log(err);
//       }
//       console.log("文件关闭成功");
//     })
//   })
// })

/*
文件的截取，从哪开始截取就从哪不显示
*/
// var fs=require("fs");
// var buf=new Buffer(1024);
// console.log("准备打开文件");
// fs.open('input.txt','r+',function(err,fd){
//   if(err){
//     return console.error(err);
//   }
//   console.log("文件打开成功！！");
//   console.log("开始截取10字节后的文件内容");
//   fs.ftruncate(fd,10,function(err){
//     if(err){
//       console.log(err);
//     }
//     console.log("截取文件成功");
//     console.log("读取相同的文件");
//     fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//       if(err){
//         console.log(err);
//       }
//       if(bytes>0){
//         console.log(buf.slice(0,bytes).toString());
//       }
//       fs.close(fd,function(err){
//         if(err){
//           console.log(err);
//         }
//         console.log("文件关闭成功");
//       })
//     })
//   })
// })

/*
删除文件
*/
// var fs=require("fs");
// console.log("准备删除文件");
// fs.unlink('input.txt',function(err){
//   if(err){
//     return console.error(err);
//   }
//   console.log("文件删除成功");
// });

/*
创建目录fs.mkdir(path[,mode],callback)
*/
// var fs=require("fs");
// console.log("创建目录/test/");
// fs.mkdir("/mygittest/mygit/node代码/node_two/test/",function(err){
//   if(err){
//     return console.error(err);
//   }
//   console.log("目录创建成功");
// });

/*
读取目录fs.readdir(path,callback)
*/
// var fs=require("fs");
// console.log("查看/node_two目录");
// fs.readdir("/mygittest/mygit/node代码/node_two/test/",function(err,files){
//   if(err){
//     return console.error(err);
//   }
//   files.forEach(function(file){
//     console.log(file);
//   });
// });

/*
删除目录fs.rmdir(path,callback)
*/
var fs=require("fs");
console.log("准备删除目录/test/");
fs.rmdir("/mygittest/mygit/node代码/node_two/test",function(err){
  if(err){
    return console.log(err);
  }
  console.log("读取/test目录");
  fs.readdir("/mygittest/mygit/node代码/node_two/",function(err,files){
    if(err){
      return console.error(err);
    }
    files.forEach(function(file){
      console.log(file);
    });
  });
});
