const querystring = require('querystring')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const _ = require('lodash')
// const Mock = require('mockjs')
const multer = require('multer');
const Mock = require('mockjs')
const arr = [];
const Random = Mock.Random
for (let i = 0; i < 100; i++) {
    arr.push(Mock.mock({
        id: "1711-"+i,
        name: Random.cname(),
        'tar|1':['ios开发','web前端','android应用','网页'],
        'day|100-1000': 1,
        'jday|100-1000': 1,
        'zday|100-1000': 1,
        'bg|100-1000': 1,
        'dj|100-1000': 1,
         zt:'投放中',
         djl:''
    }))
}
for(let i=0;i<arr.length;i++){
    arr[i].djl=parseInt(arr[i].dj/arr[i].bg*100)+'%'
}
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      //destination把文件存在服务器的哪个地方
    cb(null, './server/uploads')
  },
  filename: function (req, file, cb) {
    //   console.log(req)
      //改文件名字
      console.log(file)
      let filename=file.originalname.split('.')
    cb(null, filename[0] + '-' + Date.now()+'.'+filename[1])
  }
})
 //注册
var upload = multer({ storage: storage })
// console.log(upload)
module.exports = function(app) {
        //登录接口
    app.post('/api/login', (req, res) => {
            console.log(req.body); //客户端传递过来的信息
            let user = fs.readFileSync('server/user.json', { encoding: "utf-8" })
            user = JSON.parse(user);
            let resInfo = {
                success: 0,
                info: "用户名或密码错误",
                token: '',
                name: null,
                time: null,
                nockName: null
            }
            user.forEach((val, index) => {
                if (req.body.user === val.user && req.body.pwd === val.pwd) {
                    console.log('aiyouwocao')
                    resInfo.success = 1;
                    resInfo.info = "登录成功";
                    resInfo.user = {
                        name: req.body.user,
                        time: new Date().toLocaleDateString(),
                        nockName: 'jk'

                    }
                }
            })
             if (resInfo.success == 1) {
                resInfo.token = jwt.sign(req.body, '1511')
                // console.log(resInfo.token)
            }
            res.end(JSON.stringify(resInfo))
    })
    app.post('/dsp-report/index',function(req,res){ 
        // console.log(req.body.datas)
        let len=req.body.datas.length;
        let arrs=[];
        let Random = Mock.Random;
        for(let i=0;i<len;i++){
            arrs.push(Random.natural(1,9999));
        }
        console.log(arrs);
        let {startTime,endTime,dimLeft,dimRight} = req.body;
        let mockData = Mock.mock({
            "status":0,
            "data":arrs
        })
       res.json(mockData)
    })
    app.post('/dsp-creative/creative/upload',upload.single('file'),(req,res)=>{
        console.log(req.file)
        res.send({
            "data":{
                "size":req.file.size,
                "value":req.file.path,
                "key":"2A36B67C6"
            },
            "status":0
        })
        // res.json('1')
    })
    app.post('/dsp-plan/index',(req,res)=>{
        res.json(arr)
    })
}