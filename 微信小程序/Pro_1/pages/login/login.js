import $http from '../../servers/$http.js'
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'../../static/images/lb.png'
  },
  formSubmit(e) {
    console.log(e.detail.value)
    // wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=2018-04-20&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',
    //   success(res){
    //     console.log(res)
    //   }
    // })
    $http.get("/rexxar/api/v2/recommend_feed?alt=json&next_date=2018-04-20&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1",{},function(res){
      console.log(res)
      if (res.statusCode==200){
        // wx.redirectTo({
        //   url: '../home/home',
        // })
        wx.navigateTo({
          url: '../home/home',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})