let domin = 'https://m.douban.com'
let header = {
  "content-type": "application/json"
}
let $http = {
  get (url,data,cb) {
    wx.request({
      url: domin+url,
      data:data,
      header:header,
      success(res){
        cb(res)
      }
    })
  },
  post(url, data, cb) {
    wx.request({
      url: url,
      data: data,
      header: header,
      method:'POST',
      success(res) {
        cb(res.data)
      }
    })
  }
}
export default $http