// pages/list-detail/list-detail.js
let feature = require('../../utils/feature');
let until = require('../../utils/util');
let database = require('../../database/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: '',
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 获取前一页传递过来的imgurl并显示到页面
    let eventChannel = this.getOpenerEventChannel();
    eventChannel.on('receive', function (data) {
      console.log(data);
      that.setData({
        imgurl: data.imgurl,
        id: data.id
      });
    });
  },
  // 下载图片
  download(e) {
    // 下载前确认界面
    until.modal().then((res) => {
      // 获取下载图片图片id
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
  delimg() {
    let that = this;
    until.modal()
      .then((res) => {
        console.log('开始删除');
        // 删除数据库数据
        database.del('imagelist', that.data.id);
        // 删除云存储数据
        feature.delFile(that.data.imgurl);
        // 删除成功后返回首页
        until.switchpage('../list/list')
          .then((res) => {
            until.hintResult('删除成功');
          })
      })
      .catch((res) => {
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