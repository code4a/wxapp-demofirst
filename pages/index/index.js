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

    AK: 'hWtYHdhw2fIwi9PWsWX09IVmGtLVp2UG',
    city: '',
    temp: '',
    todayDayImg: '',
    todayNightImg: '',
    weather: '',
    todayDate: '',
    todayTime: '',

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
  // 监听用户下拉动作
  onPullDownRefresh: function () {
      this.getTime();
  },
  onLoad: function () {
    console.log('onLoad')

    this.loadInfo();
    this.getTime();

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '欢迎页面分享',
      path: '/pages/index/index'
    }
  },
  loadInfo: function () {
        var that = this;
        wx.getLocation({
            type: 'gcj02',
            success: function(res) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                var AK = that.data.AK;
               that.loadCity(latitude, longitude, AK, that.loadWeather);
               console.log(that.data.city);
            //    that.loadWeather(that.data.city, AK);
            }
        })
    },
    loadCity: function (latitude, longitude, AK, callback) {
        var that = this;
        var url = 'https://api.map.baidu.com/geocoder/v2/?location=' + latitude + ',' + longitude + '&output=json&ak=' + AK;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res);
                var city = res.data.result.addressComponent.city;
                that.setData({city :city});
                console.log(that.data.city);
                callback && callback(city, AK);
            }
        })
    },
    loadWeather: function (city, AK) {
        var that  = this;
        var url = 'https://api.map.baidu.com/telematics/v3/weather?location=' + city + '&output=json&ak=' + AK;
        console.log(url);
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                var desNum = that.random(5);
                console.log(res);
                var future = res.data.results[0].weather_data.filter(function(ele, index) {
                    return index > 0;
                });
                var temReg = /\d+℃/;
                that.setData({
                    temp: res.data.results[0].weather_data[0].date.match(temReg)[0],
                    todayDayImg: res.data.results[0].weather_data[0].dayPictureUrl,
                    todayNightImg: res.data.results[0].weather_data[0].nightPictureUrl,
                    weather: res.data.results[0].weather_data[0].weather + ' | ' + res.data.results[0].weather_data[0].wind,
                });
            console.log(that.data.future);

            }
        })
    },
    random: function(max, min) {
        var min = min || 0;
        return Math.floor(Math.random() * (max - min +1) + min);
    },
    getTime: function () {
        var date = new Date();
        var minute = date.getMinutes() >=10 ? date.getMinutes() : ('0' + date.getMinutes());
        var hour = date.getHours() >=10 ? date.getHours() : ('0' + date.getHours());
        var now = date.getDate() >= 10 ? date.getDate() : ('0' + date.getDate());
        var todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + now;
        var todayTime = hour + ':' + minute;
        this.setData({
            todayDate: todayDate,
            todayTime: todayTime
        })
    }
})
