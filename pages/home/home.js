//home.js
var network_util = require('../../utils/network_util.js');
var util = require('../../utils/util.js');
var api_data = require('../../utils/api_data.js');

var curPageIndex = [1, 1, 1, 1, 1]
var tabInitState = [false, false, false, false, false]
var budejieMaxtime = null

Page({
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    banners: api_data.getBannerData(),
    navTopItems: api_data.getIndexNavData(),
    list: {},
    curNavId: 1,
    curIndex: 0
  },
  onLoad: function (options) {
    this.checkInitLoadGankData()
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  imageOnLoad(ev){
    console.log('图片加载成功！width: ${ev.detail.width}; height: ${ev.detail.height}');
  },
  imageOnLoadError(){
    console.log('图片加载失败！');
  },
  refreshPic: function(){
    console.log('refreshPic！');
    var that = this;
    this.data.banners = api_data.refreshBannerData(
      function (res) {
          console.log(res);
          that.setData({
            banners: res
          })
        })
  },
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      this.setData({
        curNavId: id,
        curIndex: index
      })
      this.checkInitLoadGankData()
      
  },
  // swiper 滚动改变监听
  onBindchange: function(e) {
    console.log(e)
    this.checkInitLoadGankData()
    this.setData({
      curNavId: e.detail.current + 1, 
      curIndex: e.detail.current
    })
  },
  // 加载干货数据和百思不得姐数据
  loadGankData: function(pageNo, callback){
    if(this.data.curIndex != 2){
      var url= 'http://gank.io/api/data/' + this.getClassifyName(true) + '/10/' + pageNo;
      network_util._get(url,
        function (res) {
          // 格式化日期
          res.data.results.map(gankInfo => {
            gankInfo.publishedAt = util.formatSimpleTime(gankInfo.publishedAt)
          })
          callback(res.data.results)
        }, 
        function (res) {
          console.log(res);
        });
    }else{
      var url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=41';
      if(budejieMaxtime == null){
          url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=41';
      }else{
          url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=41&page='+pageNo+'&maxtime=' + budejieMaxtime;
      }
      // console.log(url)
      network_util._get(url,
        function (res) {
          // console.log(res.data.info.maxtime)
          budejieMaxtime = res.data.info.maxtime
          callback(res.data.list)
        }, 
        function (res) {
          console.log(res);
        });
    }
  },
  /**
   * 获取分类名称
   * @param isApiName 是否是干货api需要的请求 url 名称
   */
  getClassifyName: function(isApiName) {
    switch(this.data.curIndex) {
      case 0:
        return isApiName ? 'Android' : 'android'
      case 1:
        return isApiName ? 'iOS' : 'ios'
      case 2:
        return isApiName ? '休息视频' : 'video'
      case 3:
        return isApiName ? '拓展资源' : 'more'
      case 4:
        return isApiName ? '前端' : 'web'
    }
  },
  // 检查初始化加载干货数据（根据不同类别）
  checkInitLoadGankData: function() {
    if (tabInitState[this.data.curIndex]) return

    var curClassifyName = this.getClassifyName()
    this.loadGankData(1, results => {
      curPageIndex[this.data.curIndex] = 2
      this.data.list[curClassifyName] = results
      this.setData({
        list: this.data.list
      })
      tabInitState[this.data.curIndex] = true
    })
  },
  //加载更多
  loadMore: function (e) {
    var curClassifyName = this.getClassifyName()
    this.loadGankData(curPageIndex[this.data.curIndex], results => {
      curPageIndex[this.data.curIndex] ++
      this.data.list[curClassifyName] = this.data.list[curClassifyName].concat(results)
      this.setData({
        list: this.data.list
      })
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  }
})