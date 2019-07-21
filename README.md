# 微信小程序---云开发练习demo

    自己喜欢收藏好看的图片，但是手机内存经常吃紧，就需要备份图片，
    但是某云盘速度感人，而且还得下软件，觉得很麻烦，
    恰好最近对小程序开发很感兴趣，又恰好小程序提供了云开发功能，
    就先做了一个小程序版的雏形；
    后期会用自己的服务器做一个完整的版本!
    
# 功能

1.上传图片

2.查看图片

3.多张图片上传（最多选九)

4.删除图片

5.下载图片


--------

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



--------------



# 踩坑

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


