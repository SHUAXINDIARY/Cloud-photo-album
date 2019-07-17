//app.js
App({
  // 程序启动函数
  /**小程序函数不卸载methods里，和data'并列 */
  onLaunch: function() {
    /**初始化云开发环境 */
    wx.cloud.init({
      // 是否在将用户访问记录到用户管理中，在控制台中可见
      traceUser:true,
      // 设置云开发环境
      env:"shauxin-chy42"
    })
  },
  // 全局变量
  globalData: {
    userInfo: null
  }
})