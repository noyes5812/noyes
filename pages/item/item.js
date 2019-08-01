var tabs = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabItems: [{
        "id": 0,
        "title": "我的点券",
        "key": 0
      },
      {
        "id": 1,
        "title": "我的收益",
        "key": 1
      },
      {
        "id": 2,
        "title": "合伙人",
        "key": 2
      },
      {
        "id": 3,
        "title": "关于我们",
        "key": 3
      }
      ,
      {
        "id": 4,
        "title": "关于我们",
        "key": 4
      }
     
    ],

    tabs: tabs, //展示的数据
    slideOffset: 0, //指示器每次移动的距离
    activeIndex: 0, //当前展示的Tab项索引
    sliderWidth: 96, //指示器的宽度,计算得到
    contentHeight: 0 //页面除去头部Tabbar后，内容区的总高度，计算得到
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          //计算相关宽度
          sliderWidth: res.windowWidth / that.data.tabs.length,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          contentHeight: res.windowHeight - res.windowWidth / 750 * 68 //计算内容区高度，rpx -> px计算
        });
      }
    });
  },
  onChange(e) {
    console.log('onChange', e.detail.key);
    this.setData({
      activeIndex: e.detail.key,
    })
  }
})