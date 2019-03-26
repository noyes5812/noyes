const app = getApp()
var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    imgUrls: [
      '/images/group3.png',
      '/images/group2.png'
    ],
    grids:[
      { "id": 0, "title": "我的点券", "url": "/images/activity.png", "bgcolor":"bgblue" },
      { "id": 1, "title": "我的收益", "url": "/images/income.png", "bgcolor": "bgyellow" },
      { "id": 2, "title": "合伙人", "url": "/images/recommend.png", "bgcolor": "bggreen"},
      { "id": 3, "title": "关于我们", "url": "/images/about.png", "bgcolor": "bgred"}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // getPhoneNumber: function (e) {//点击获取手机号码按钮

  //   var that = this;

  //   wx.checkSession({
  //     success: function () {
  //       console.log(e.detail.errMsg)
  //       console.log(e.detail.iv)
  //       console.log(e.detail.encryptedData)
  //     }
  //   })
  // }
  
})