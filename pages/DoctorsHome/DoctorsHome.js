var sliderWidth = 88; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ["服务项目", "出诊时间", "医生评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  toleft:function(){
    wx.navigateTo({
      url: '../GraphicReservation/GraphicReservation'
    })
  },
  tocenter: function () {
    wx.navigateTo({
      url: '../TelephoneReservation/TelephoneReservation'
    })
  },
  toright: function () {
    wx.navigateTo({
      url: '../DoctorReservation/DoctorReservation'
    })
  }
});