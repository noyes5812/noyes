import { $stopWuxRefresher } from '../../dist/index'
var key="";
Page({
  data: {
    current: 'tab1',
    key:1,
    tabs: [
      {
        key: 'tab4',
        title: '全部',
        // content: 'Content of tab 4',
      },
      {
        key: 'tab1',
        title: '待付款',
        // content: 'Content of tab 1',
      },
      {
        key: 'tab2',
        title: '待收货',
        // content: 'Content of tab 2',
      },
      {
        key: 'tab3',
        title: '待评价',
        // content: 'Content of tab 3',
      },
    
    ],
  },
  //b.js 页面接收参数
  onLoad: function (options) {       //options用于接收上个页面传递过来的参数
    var that = this;
    console.log("options.key="+options.key)
    that.setData({                             //this.setData的方法用于把传递过来的id转化成小程序模板语言
     // key: options.key,     //id是a页面传递过来的名称，a_id是保存在本页面的全局变量   {{b_id}}方法使用
    })
  },
 
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const { key } = e.detail
    const index = this.data.tabs.map((n) => n.key).indexOf(key)
    console.log("index:"+index)
    this.setData({
      key,
      index,
    })
  },
  onSwiperChange(e) {
    console.log('onSwiperChange', e)
    const { current: index, source } = e.detail
    const { key } = this.data.tabs[index]
    console.log("key="+key)
    console.log("current=" )

    if (!!source) {
      this.setData({
        key,
        index,
      })
    }
  },
})