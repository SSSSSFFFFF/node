var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", ' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://139.196.102.62:27017/";

MongoClient.connect(url, {
   useNewUrlParser: true
}, function (err, db) {
   if (err) throw err;
   console.log('数据库已创建');
   var dbase = db.db("runoob");
   dbase.createCollection('site', function (err, res) {
      if (err) throw err;
      console.log("创建集合!");
      db.close();
   });
});





var questions = [{
      data: 213,
      num: 444,
      age: 12
   },
   {
      data: 456,
      num: 678,
      age: 13
   }
];

//写个接口123
app.get('/123', function (req, res) {
   res.status(200),
      res.json(questions)
});

// POST method route
app.post("/user", (req, res) => {
   //接收客户端请求主体数据
   req.on('data', (data) => {
      console.log(data);
   });
});

//配置服务端口
var server = app.listen(8000, function () {
   console.log('放在服务器的地址 http://139.196.102.62:8000/123');
   console.log('本地开发地址 http://localhost:8000/123')
})