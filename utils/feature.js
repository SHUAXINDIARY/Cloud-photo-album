let until=require('./util.js');
let timetamp = Date.parse(new Date());
let choseImg = () => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      success: function(res) {
        // 加一层提示
        until.hintLoading('上传中');
        resolve(res);
      },
      fail: function(err) {
        reject(err);
      }
    })
  })
};
let upload = () => {
  return new Promise((resolve, reject) => {
    choseImg().then(
      (res) => {
        wx.cloud.uploadFile({
          cloudPath: timetamp + '.png', // 上传至云端的路径 图片命名用当前时间戳命名
          filePath: res.tempFilePaths[0], // 获取选择的函数
          success: res => {
            resolve(res);
          },
          fail: err => {
            // console.log('上传失败');
            reject(err);
          }
        })
      }

    );
  });

  // wx.chooseImage({
  //   // 控制可选图片的数量
  //   count: 1,
  //   success: function(res) {
  //     // 加一层提示
  //     wx.showLoading({
  //       title: '上传中',
  //     });
  //     console.log(res);
  //     /**官方提供上传文件函数 */
  //     wx.cloud.uploadFile({
  //       cloudPath: timetamp + '.png', // 上传至云端的路径 图片命名用当前时间戳命名
  //       filePath: res.tempFilePaths[0], // 获取选择的函数
  //       success: res => {
  //         // 返回文件 ID  后需要操作该图片就用返回的该id
  //         let count = that.data.imgcount++;
  //         console.log('id是' + res.fileID);
  //         that.setData({
  //           img: res.fileID
  //         });
  //         that.addImgList(res.fileID);
  //         // 隐藏加载提示
  //         wx.hideLoading();
  //         wx.showToast({
  //           title: '上传成功',
  //         })
  //       },
  //       fail: err => {
  //         console.log('上传失败');
  //       }
  //     })

  //   },
  // })
};
module.exports = {
  upload: upload
}