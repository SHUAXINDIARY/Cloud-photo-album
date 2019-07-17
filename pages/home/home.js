// pages/home/home.js
let until = require('../../utils/util.js');
let datacon = require('../../database/index.js');
let feature = require('../../utils/feature.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ""
  },
  /**自定义函数 */
  // 1.图片上传
  upload() {
    let that = this;
    feature.upload().then(
      (res) => {
        // 返回文件 ID  后需要操作该图片就用返回的该id
        console.log('id是' + res.fileID);
        that.setData({
          img: res.fileID
        });
        that.addImgList(res.fileID);
        // 隐藏加载提示
        wx.hideLoading();
        until.hintResult('上传成功');
      }
    )
  },
  // 2.把上传的图片的id存到数据库imagelist中
  addImgList(imgurl) {
    let data = {
      name: "刷新",
      imgUrl: imgurl,
      time: until.getNowFormatDate()
    };
    // 第一个参数要操作的集合 第二个数据是要添加的数据(对象类型)
    datacon.add('imagelist', data);
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