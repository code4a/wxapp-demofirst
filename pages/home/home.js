//home.js
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
var md5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');
var api_data = require('../../utils/api_data.js');
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies: api_data.getBannerData(),
    navTopItems: api_data.getIndexNavData(),
    curNavId: 1,
    curIndex: 0
    // // text:"这是一个页面"
    // list: [],
    // dd: '',
    // hidden: false,
    // page: 1,
    // size: 20,
    // hasMore: true,
    // hasRefesh: false,
    // homemotto: '欢迎进入我的主页'
  },
  onLoad: function (options) {
    var that = this;
    // var url = 'http://gank.io/api/data/Android/10/1';
    // network_util._get(url,
    //   function (res) {
    //     // console.log(res.data);
    //     that.setData({
    //       list: res.data.results,
    //       // hidden: true,
    //     });
    //   }, 
    //   function (res) {
    //     console.log(res);
    //   });
    this.loadGankData(0);
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
  //点击事件处理
  bindViewTap: function (e) {
    console.log(e.currentTarget.dataset.title);
  },

  imageOnLoad(ev){
    console.log('图片加载成功！width: ${ev.detail.width}; height: ${ev.detail.height}');
  },
  imageOnLoadError(){
    console.log('图片加载失败！');
    this.setData()({
    })
  },
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
      this.loadGankData(index);
  },
  loadGankData: function(index){
    var that = this;
    if(index != 2){
      var url = 'http://gank.io/api/data/'+ this.getGankApiType(index) +'/10/1';
      
      network_util._get(url,
        function (res) {
          // console.log(res.data);
          that.setData({
            list: res.data.results,
            // hidden: true,
          });
        }, 
        function (res) {
          console.log(res);
        });
    }else{
      var url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=41';
      network_util._get(url,
        function (res) {
          // console.log(res.data);
          that.setData({
            list: res.data.list,
            // hidden: true,
          });
        }, 
        function (res) {
          console.log(res);
        });
    }
  },

  getGankApiType: function(index){
    switch(index){
      case 0:
        return 'Android'
      case 1:
        return 'iOS'
      case 2:
        return '休息视频'
      case 3:
        return '拓展资源'
      case 4:
        return '前端'
    }
  },
  //加载更多
  loadMore: function (e) {
    var that = this;
    that.setData({
      hasRefesh: true,
    });
    if (!this.data.hasMore) return
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=' + (++that.data.page) + '&ps=10';
    network_util._get(url,
      function (res) {
        that.setData({
          list: that.data.list.concat(res.data.result.list),
          hidden: true,
          hasRefesh: false,
        });
      }, function (res) {
        console.log(res);
      })
  },
  // //刷新处理
  // refesh: function (e) {
  //   var that = this;
  //   that.setData({
  //     hasRefesh: true,
  //   });
  //   var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
  //   network_util._get(url,
  //     function (res) {
  //       that.setData({
  //         list: res.data.result.list,
  //         hidden: true,
  //         page: 1,
  //         hasRefesh: false,
  //       });
  //     }, function (res) {
  //       console.log(res);
  //     })
  // },
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