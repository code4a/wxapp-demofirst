//link.js
//引入图片预加载组件
const ImgLoader = require('../../img-loader/img-loader.js')

//缩略图 80x50 3KB
const imgUrlThumbnail = 'http://storage.360buyimg.com/mtd/home/lion1483683731203.jpg'
//原图 3200x2000 1.6MB
const imgUrlOriginal = 'http://img.gank.io/652f9aa3-0208-4319-a44f-4c86031b8c1e'
Page({
  data: {
     msg: '',
        imgUrl: '',
    linkmotto: '欢迎进入我的主页'
  },
   onLoad() {
        //初始化图片预加载组件
        this.imgLoader = new ImgLoader(this)
    },
    loadImage() {
        //加载缩略图
        this.setData({
            msg: '大图正在拼命加载..',
            imgUrl: imgUrlThumbnail
        })

        //同时对原图进行预加载，加载成功后再替换
        // this.imgLoader.load(imgUrlOriginal, (err, data) => {
        //     console.log('图片加载完成', err, data.src)
        //     this.setData({ msg: '大图加载完成~' })

        //     if (!err)
        //         this.setData({ imgUrl: data.src })
        // })
        wx.request({
          url: imgUrlOriginal,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})