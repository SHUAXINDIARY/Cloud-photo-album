// pages/home/home.js
let until = require('../../utils/util.js');
let datacon = require('../../database/index.js');
let feature = require('../../utils/feature.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "",
    // imgs: []
  },
  /**自定义函数 */
  // 1.单张图片上传
  upload() {
    let that = this;
    // 获取传递参数 event.currentTarget.dataset.imgnumber
    feature.upload().then(
      (res) => {
        console.log(res);
        // 隐藏加载提示
        wx.hideLoading();
        until.hintResult('上传成功');
      }
    )
  },
  //1.5 多张图片上传
  uploads() {
    let that = this;
    feature.uploads().then(
      (res) => {
        // 隐藏加载提示
        wx.hideLoading();
        until.hintResult('上传成功');
      }
    );
    // console.log(that.data.imgs);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})