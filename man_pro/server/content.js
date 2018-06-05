import Mock from 'mockjs'
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
         zt:'投放中'
    }))
}
export default arr;