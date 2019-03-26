
import { $stopWuxRefresher } from '../../dist/index'
//index.js
//获取应用实例
const app = getApp()
Page({

  tabClick: function(e){
    console.log(e)
  },
  // onGetPoint:function(e){
  //   console.log(222222)
  //   wx.navigateTo({
  //     url: '../home/home',
  //   })
  // },
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
      
      $stopWuxRefresher()
    }, 1000)
  }
})