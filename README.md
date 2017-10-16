这是用wepy框架开发的微信小程序。开发流程如下：

## 1.git clone git@192.168.0.135:mobile/infore-wepy-base.git 导出项目到webStore

## 2.在项目根目录下执行 npm install wepy --save 命令，执行完后会自动生成dist/文件夹

#3.在项目根目录下执行wepy build --watch 命令

#4.用微信开发者工具打开dist文件夹，微信开发者工具 --> 项目 --> 关闭ES6转ES5。(这一步很重要，不然运行不正常) 点击编译，就可以运行了，
