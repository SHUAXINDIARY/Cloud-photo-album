// pages/list/list.js
let feature = require('../../utils/feature');
let until = require('../../utils/util');

// test分支做测试版本

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    hasImg: true
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getImgList();
  },
  download(e) {
    // 下载前确认
    feature.modal().then((res) => {
      // 获取点击图片id
      let imgurl = e.currentTarget.dataset.imgurl.imgUrl;
      console.log(imgurl);
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
  getImgList() {
    let that = this;
    const db = wx.cloud.database();
    db.collection('imagelist').get({
      success: function (res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          dataList: res.data
        });
        console.log(that.data.dataList.length);
        if (that.data.dataList.length != 0) {
          that.data.hasImg = true;
        }
      }
    })

  }
})