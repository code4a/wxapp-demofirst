//link.js
var util = require('../../utils/util')
var curPageIndex = [1, 1, 1]
var tabInitState = [false, false, false]

Page({
  data: {
    gankData: {},
    loadingHidden: false,
    curSelClassifyIndex: 0
  },
  onLoad: function() {
    this.checkInitLoadGankData()
  },
  // 加载干货数据
  loadGankData: function(pageNo, callback) {
    // 获取干货列表数据
    wx.request({
      url: 'http://gank.io/api/data/' + this.getClassifyName(true) + '/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        // 格式化日期
        res.data.results.map(gankInfo => {
          gankInfo.publishedAt = util.formatSimpleTime(gankInfo.publishedAt)
        })

        callback(res.data.results)
      }
    })
  },
  // 滚动到列表底部监听
  onBindscrolltolower: function(e) {
    var curClassifyName = this.getClassifyName()
    this.loadGankData(curPageIndex[this.data.curSelClassifyIndex], results => {
      curPageIndex[this.data.curSelClassifyIndex] ++
      this.data.gankData[curClassifyName] = this.data.gankData[curClassifyName].concat(results)
      this.setData({
        gankData: this.data.gankData
      })
    })
  },
  // swiper 滚动改变监听
  onBindchange: function(e) {
    this.checkInitLoadGankData()
    this.setData({
      curSelClassifyIndex: e.detail.current
    })
  },
  // 分类点击监听（android）
  // TODO：不知道 bindtap 怎么给方法传参数，不然下面两个方法只需要保留一个就可以了
  onTitleBarsClick0: function() {
    this.setData({
      curSelClassifyIndex: 0
    })
  },
  // 分类点击监听（iOS）
  onTitleBarsClick1: function() {
    this.setData({
      curSelClassifyIndex: 1
    })
  },
  // 分类点击监听（web）
  onTitleBarsClick2: function() {
    this.setData({
      curSelClassifyIndex: 2
    })
  },
  /**
   * 获取分类名称
   * @param isApiName 是否是干货api需要的请求 url 名称
   */
  getClassifyName: function(isApiName) {
    switch(this.data.curSelClassifyIndex) {
      case 0:
        return isApiName ? 'Android' : 'android'
      case 1:
        return isApiName ? 'iOS' : 'ios'
      case 2:
        return isApiName ? '前端' : 'web'
    }
  },
  // 检查初始化加载干货数据（根据不同类别）
  checkInitLoadGankData: function() {
    if (tabInitState[this.data.curSelClassifyIndex]) return

    var curClassifyName = this.getClassifyName()
    this.loadGankData(1, results => {
      curPageIndex[this.data.curSelClassifyIndex] = 2
      this.data.gankData[curClassifyName] = results
      // console.log(results);
      // console.log(this.data.gankData);
      this.setData({
        loadingHidden: true,
        gankData: this.data.gankData
      })
      tabInitState[this.data.curSelClassifyIndex] = true
    })
  }
})









//引入图片预加载组件
// const ImgLoader = require('../../img-loader/img-loader.js')
// var api_data = require('../../utils/api_data.js')

// //缩略图 80x50 3KB
// const imgUrlThumbnail = 'http://storage.360buyimg.com/mtd/home/lion1483683731203.jpg'
// //原图 3200x2000 1.6MB
// const imgUrlOriginal = 'http://img.gank.io/652f9aa3-0208-4319-a44f-4c86031b8c1e'
// Page({
//   data: {
//     msg: '',
//     imgUrl: '',
//     linkmotto: '欢迎进入我的主页',
//     allDataList: api_data.getTestAndroidData()
//   },
//   onLoad() {
//     //初始化图片预加载组件
//     this.imgLoader = new ImgLoader(this)
//   },
//   loadImage() {
//     //加载缩略图
//     this.setData({
//       msg: '大图正在拼命加载..',
//       imgUrl: imgUrlThumbnail
//     })

//     //同时对原图进行预加载，加载成功后再替换
//     // this.imgLoader.load(imgUrlOriginal, (err, data) => {
//     //     console.log('图片加载完成', err, data.src)
//     //     this.setData({ msg: '大图加载完成~' })

//     //     if (!err)
//     //         this.setData({ imgUrl: data.src })
//     // })
//     wx.request({
//       url: imgUrlOriginal,
//       data: {},
//       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
//       // header: {}, // 设置请求的 header
//       success: function (res) {
//         // success
//         console.log(res);
//       },
//       fail: function () {
//         // fail
//       },
//       complete: function () {
//         // complete
//       }
//     })
//   }
// })