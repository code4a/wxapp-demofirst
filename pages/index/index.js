//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    playTime: 0,
    playing: false,
    curPos: '00:00',
    duration: '00:00',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    motto: '欢迎开始我的第一个小程序',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 音乐相关的事件处理函数
 audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  // audio14: function () {
  //   this.audioCtx.seek(14)
  // },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  seek: function (e) {
    this.audioCtx.seek(e.detail.value);
    // console.log(e.detail.value);
  },
  bindAudioPlay: function(){
    // console.log("audio play");
    this.setData({
      playing: true
    })
  },
  bindAudioPause: function(){
    // console.log("audio pause");
    this.setData({
      playing: false
    })
  },
  bindAudioTimeUpdate: function(u){
    // console.log(u.detail.currentTime);
    // console.log(u.detail.duration);
    this.setData({
      playTime: u.detail.currentTime,
      curPos: util.formatAudioTime(u.detail.currentTime),
      duration: util.formatAudioTime(u.detail.duration)
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
