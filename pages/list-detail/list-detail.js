// pages/list-detail/list-detail.js
let feature = require('../../utils/feature');
let until = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let eventChannel = this.getOpenerEventChannel();
    eventChannel.on('receive', function (data) {
      console.log(data);
      that.setData({
        imgurl: data.data
      });
    });
  },
  download(e) {
    // 下载前确认
    feature.modal().then((res) => {
      // 获取点击图片id
      let imgurl = this.data.imgurl;
      // 下载
      feature.downloadFile(imgurl)
        .then((res) => {
          console.log(res);
          wx.hideLoading();
          until.hintResult('下载成功');
        })
        .catch((res) => {
          until.hintResult('取消');
        });
    }).catch((res) => {
      until.hintResult('取消下载');
    })

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