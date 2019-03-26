
import { $wuxToast } from '../../dist/index'
import { $stopWuxRefresher } from '../../dist/index'

//logs.js
const util = require('../../utils/util.js')

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    grids: [
      { "id": 0, "title": "待付款", "url": "/images/waitpay.png","num":""},
      { "id": 1, "title": "待分享", "url": "/images/waitshare.png", "num": "12"},
      { "id": 2, "title": "待发货", "url": "/images/waithuo.png", "num": "2"},
      { "id": 3, "title": "待收货", "url": "/images/waitpick.png", "num": "4"},
      { "id": 4, "title": "待评价", "url": "/images/waitspeek.png", "num": "6"}
    ],
    collects: [
      { "id": 0, "title": "优惠券", "url": "/images/activity.png" },
      { "id": 1, "title": "商品收藏", "url": "/images/income.png" },
      { "id": 2, "title": "店铺收藏", "url": "/images/recommend.png" },
      { "id": 3, "title": "历史浏览", "url": "/images/about.png" }
     
    ],
  
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数 跳转
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../home/home'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  //提示框 
  showToastText() {
   
    $wuxToast().show({
      type: 'text',
      duration: 1000,
      color: '#fff',
      text: '修改成功',
      success: () => console.log('文本提示')
    })
  },
  getUserInfo: function (e) {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        console.log(22)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,      
        })
        this.showToastText();
      }
    })
  },
  onPulling() {
    console.log('onPulling')
  },
  onRefresh() {
    console.log('onRefresh')
    setTimeout(() => {

     //刷新操作。调用API接口
      // this.setData({
      //   items: [{
      //     title: new Date,
      //     content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      //   }, ...this.data.items],
      // })
     
      //更新数据，获取订单各数量

      $stopWuxRefresher()
    }, 1000)
  },
 
})
