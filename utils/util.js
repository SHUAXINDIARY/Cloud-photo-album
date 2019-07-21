// 格式化时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取现在时间(毫秒)
const getNowFormatDate = function () {
  let date = new Date();
  let seperator1 = '-';
  let seperator2 = ':';
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + strDate;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
  return currentdate;
};
let hintResult = (msg) => {
  wx.showToast({
    title: msg,
  })
};
let hintLoading = (msg) => {
  wx.showLoading({
    title: msg,
  })
};
let modal = function () {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: '确定？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          resolve(res.confirm);
        } else if (res.cancel) {
          console.log('用户点击取消');
          reject(res.cancel);
        }
      }
    })
  })
};
let switchpage = function (url) {
  return new Promise((resolve,reject) => {
    wx.switchTab({
      url: url,
      success(res) {
        resolve(res);
      }
    });
  })


};
module.exports = {
  formatTime: formatTime,
  getNowFormatDate: getNowFormatDate,
  hintResult: hintResult,
  hintLoading: hintLoading,
  modal: modal,
  switchpage: switchpage
}