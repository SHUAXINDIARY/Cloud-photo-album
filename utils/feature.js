let until = require('./util.js');
let database = require('../database/index.js');
let timetamp = Date.parse(new Date());
// 封装选择照片
let choseImg = (imgCount) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: imgCount,
      success: function (res) {
        // 加一层提示
        until.hintLoading('上传中');
        resolve(res);
      },
      fail: function (err) {
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
            database.add('imagelist', data);
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
              database.add('imagelist', data);
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
// 下载文件
let downloadFile = function (imgurl) {
  return new Promise((resolve, reject) => {
    wx.cloud.downloadFile({
      fileID: imgurl,
      success: function (res) {
        until.hintLoading('下载中');
        console.log(res)
        // 保存到相册

        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log(res)
            resolve(res);
          },
          fail: function (res) {
            console.log(res)
            console.log('保存失败');
            reject(res);
          }
        })

      },
      fail: function () {
        console.log('下载失败')
      }
    })

  })
};
let delFile=function(fileID){
  wx.cloud.deleteFile({
    fileList: [fileID],
    success: res => {
      console.log('云端删除成功');
    },
    fail: err => {
      console.log('远端删除失败');
    }
  });
};
module.exports = {
  upload,
  uploads,
  delFile,
  downloadFile
}