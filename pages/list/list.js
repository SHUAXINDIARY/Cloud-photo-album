// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getImgList();
    
  },
  getImgList() {
    let that = this;
    const db = wx.cloud.database();
    db.collection('imagelist').get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          dataList: res.data
        })
        if (this.data.dataList.length == 0) {
          wx.showToast({
            title: '暂时没有图片',
          })
        }
      }
    })

  }
})