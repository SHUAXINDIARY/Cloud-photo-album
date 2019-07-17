// pages/home/home.js
let getTime = require('../../utils/util.js');

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
    let timetamp=Date.parse(new Date());
    /**官方提供的选择图片函数 */
    wx.chooseImage({
      // 控制可选图片的数量
      count: 1,
      success: function(res) {
        // 加一层提示
        wx.showLoading({
          title: '上传中',
        });
        console.log(res);
        /**官方提供上传文件函数 */
        wx.cloud.uploadFile({
          cloudPath: timetamp + '.png', // 上传至云端的路径 图片命名用当前时间戳命名
          filePath: res.tempFilePaths[0], // 获取选择的函数
          success: res => {
            // 返回文件 ID  后需要操作该图片就用返回的该id
            let count = that.data.imgcount++;
            console.log('id是' + res.fileID);
            that.setData({
              img: res.fileID
            });
            that.addImgList(res.fileID);
            // 隐藏加载提示
            wx.hideLoading();
            wx.showToast({
              title: '上传成功',
            })
          },

          fail: console.error
        })

      },
    })

  },
  // 2.把上传的图片的id存到数据库imagelist中
  addImgList(imgurl) {
    // 链接数据库
    const db = wx.cloud.database();
    db.collection('imagelist').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: "刷新",
        imgUrl: imgurl,
        time: getTime.getNowFormatDate()
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log("添加成功", res);
      },
      fail(err) {
        console.log("添加失败", err);
      },
    })
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