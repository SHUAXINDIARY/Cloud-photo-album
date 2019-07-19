let until = require('./util.js');
let datacon = require('../database/index.js');
let timetamp = Date.parse(new Date());
// 封装选择照片
let choseImg = (imgCount) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: imgCount,
      success: function(res) {
        // 加一层提示
        until.hintLoading('上传中');
        resolve(res);
      },
      fail: function(err) {
        console.log('失败');
        reject(err);
      }
    })
  })
};
// 单张图片上传
let upload = () => {
  return new Promise((resolve, reject) => {
    choseImg().then(
      (res) => {
        // 上传文件
        wx.cloud.uploadFile({
          cloudPath: timetamp + '.png', // 上传至云端的路径 图片命名用当前时间戳命名
          filePath: res.tempFilePaths[0], // 获取选择的函数
          success: res => {
            let data = {
              name: "刷新",
              imgUrl: res.fileID,
              time: until.getNowFormatDate()
            };
            datacon.add('imagelist', data);
            resolve(res);
          },
          fail: err => {
            console.log('上传失败');
            reject(err);
          }
        });
      }
    );
  });
};
// 多张图片上传
let uploads = () => {
  let imgs = [];
  return new Promise((resolve, reject) => {
    choseImg().then(
      (res) => {
        // 上传文件
        res.tempFilePaths.forEach((item, index) => {
          wx.cloud.uploadFile({
            cloudPath: timetamp + index + '.png', // 上传至云端的路径 图片命名用当前时间戳命名
            filePath: item,
            success: res => {
              let data = {
                name: "刷新",
                imgUrl: res.fileID,
                time: until.getNowFormatDate()
              };
              datacon.add('imagelist', data);
              resolve(res);
            },
            fail: err => {
              reject(err);
            }
          });
        });

      }
    );
  });
};
module.exports = {
  upload,
  uploads
}