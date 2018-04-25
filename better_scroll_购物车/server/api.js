const querystring = require('querystring')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const _ = require('lodash')
const mockjs = require('mockjs')
const Random = mockjs.Random;
const objCon=[];
const arrList = [];
// console.log(Random)
// const arr1 = ['热销', '优惠', '新品品尝', '超值套餐', '经典烧味', '烧饼多味', '烧味多拼', '拌饭汁', '经典单品', '秋衣', '秋裤', '篮球', '乒乓球'];
// for (let i = 0; i < arr1.length; i++) {
//     objCon.push(Mock.mock({
//         item: arr1[i],
//         "foodList|3-8": [{
//             "pic": Random.dataImage('60x60', 'image'),
//             "text": Random.ctitle(5, 10),
//             "num": Random.natural(1, 99),
//             "price": Random.natural(1, 99),
//             "cont": 1,
//             "id": Random.id()
//         }]

//     }))
// }
// const data = mockjs.mock({
//     "list|5-7": [{
       
//         "id|+1": 1,
//         "name": 'lll',
//         "color": '@color',
//          "pic": Random.image('60x60', 'image'),
//     }]
// })
for(let i=0;i<10;i++){
    arrList.push(
        mockjs.mock({
             "id|+1": 1,
        "name": 'lll',
        "color": '@color',
         "pic": Random.image('60x60', 'image'),
         "text": Random.ctitle(5, 10),
        })
    )
}
// console.log(text);
module.exports = function(app) {    
    app.get('/api/routeLink',(req,res)=>{
        let routerLink = require('../src/mock/datas/routerLink.json')
        res.json(routerLink)
    })
    app.get('/api/list',(req,res)=>{
        res.json(arrList)
    })

}