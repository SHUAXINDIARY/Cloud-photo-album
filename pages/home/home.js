// pages/home/home.js
let until = require('../../utils/util.js');
let feature = require('../../utils/feature.js');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /**自定义函数 */
  // 1.单张图片上传
  upload() {
    let that = this;
    if (this.checkStaus() == 0) {
      that.checkStaus()
    } else {
      // 获取传递参数 event.currentTarget.dataset.imgnumber
      feature.upload().then(
        (res) => {
          console.log(res);
          // 隐藏加载提示
          wx.hideLoading();
          until.hintResult('上传成功');
        }
      )
    }

  },
  //1.5 多张图片上传
  uploads() {
    let that = this;
    if (this.checkStaus() == 0) {
      that.checkStaus()
    } else {
      feature.uploads().then(
        (res) => {
          // 隐藏加载提示
          wx.hideLoading();
          until.hintResult('上传成功');
        }
      )
    }

    // console.log(that.data.imgs);
  },
  // 检查登录状态
  checkStaus() {
    // 通过全局变量userInfo检查是否登陆
    if (app.globalData.userInfo == null) {
      wx.showToast({
        icon: 'none',
        title: '请先登录',
      });
      return 0;
    };
    return 1;
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