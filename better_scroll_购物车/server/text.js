const arr1 = ['热销', '优惠', '新品品尝', '超值套餐', '经典烧味', '烧饼多味', '烧味多拼', '拌饭汁', '经典单品', '秋衣', '秋裤', '篮球', '乒乓球'];
const objCon = [];
const  Mock =require ('mockjs')
const Random = Mock.Random
for (let i = 0; i < arr1.length; i++) {
    objCon.push(Mock.mock({
        item: arr1[i],
        "foodList|3-8": [{
            "pic": Random.dataImage('60x60', 'image'),
            "text": Random.ctitle(5, 10),
            "num": Random.natural(1, 99),
            "price": Random.natural(1, 99),
            "cont": 1,
            "id": Random.id()
        }]

    }))
}