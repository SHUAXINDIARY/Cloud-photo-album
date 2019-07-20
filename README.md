# 微信小程序---云开发练习demo

# 目录说明

    /database-----数据库文件夹

        index.js-----操作数据库

    /icon---------图片文件夹

    /pages--------页面文件夹

        /home--------上传图片页

        /list--------展示图片页

    /untils-------存放业务代码和公用函数文件

        until--------公用函数文件

        feature------业务代码文件

    app.js--------全局js

    app.json------全局配置

    app.wxss------全局样式

    weui.wxss-----官方ui库


------

--------------

# 功能

1.上传图片

2.查看图片

3.多张图片上传（最多选九)


----------
# 待扩展功能
1.下载图片

2.图片分类

3.删除图片

4.上传者名字为登陆后的微信号


--------

# 采坑

1.点击事件是bindTap='事件名'

        <view data-hint='hi' bindTap='clickme'></view>

2.更改data的数据

        this.setData({
            key:value
        })

3.点击事件传递参数：

    传递：data-***='传递的值'

        <view data-hint='hi' bindTap='clickme'></view>

    接收：

        clickme=function(event){
            event.currentTarget.dataset.hint=='hi';//true
        }

4.利用云开发存储时使用的api
    
    1.上传文件-----wx.cloud.uploadFile
    2.下载文件-----wx.cloud.downloadFile
    3.获取下载链接-wx.cloud.getTempFileURL
    4.删除文件-----wx.cloud.deleteFile

5.对外部服务器交互时的版本
    
    1.上传文件-----wx.uploadFile
    2.下载文件-----wx.downloadFile
    3.获取下载链接-wx.getTempFileURL


