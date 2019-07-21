// pages/list/list.js


// test分支做删除的测试版本

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
  getdetail(e) {
    // 跳转到详情页，可进行删除下载操作
    console.log(e);
    let imgurl = e.currentTarget.dataset.imgurl.imgUrl;
    let id = e.currentTarget.dataset.imgurl._id;
    wx.navigateTo({
      url: '../list-detail/list-detail',
      success: function (res) {
        console.log('开始');
        // 通过eventChannel向被打开页面传送点击图片的imgurl
        res.eventChannel.emit('receive', { imgurl: imgurl, id: id })
      }
    });
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