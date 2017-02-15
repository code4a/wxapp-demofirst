# wxapp-demofirst
微信小程序初探


## 欢迎页

* 页面的上半部分是自动生成的，修改了文字的位置，下边添加了一个音乐组件，添加了audio的`bindplay`,`bindpause`,`bindtimeupdate`事件，从而更新底部的**position**和**duration**以及slider的进度

* 控制器的左侧按钮支持状态变化，随着音乐的暂停播放更新状态，右侧的按钮测试从**[阿里通信图标库](http://www.iconfont.cn/collections/show/29)**中下载


### 预览
![欢迎页效果图](pic4readme/pic1.png)


## 主界面

* 页面的上半部分是一个自动滚动的swiper
* 中间是一个导航条，
* 底部是内容列表，根据导航条当前的定位，去加载对应分类下的内容

### 预览
![欢迎页效果图](pic4readme/pic2.png)
