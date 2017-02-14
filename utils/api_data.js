/**
 * banner数据
 */
function getBannerData() {
    var arr = [
        { url: 'http://7xi8d6.com1.z0.glb.clouddn.com/16123958_1630476787257847_7576387494862651392_n.jpg?imageView2/2/h/100' },
        { url: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-02-10-16465759_171779496648995_128281069584646144_n.jpg' },
        { url: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-02-09-16583339_172818256542563_353855393375453184_n.jpg' },
        { url: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-02-08-16230686_191036801373876_4789664128824246272_n.jpg' }
    ]
    return arr
}
/*
 * 首页 navnav 数据
 */
function getIndexNavData() {
    var arr = [
        {
            id: 1,
            icon: "../../image/nav_android_icon.png",
            title: "Android"
        },
        {
            id: 2,
            icon: "../../image/nav_ios_icon.png",
            title: "IOS"
        },
        {
            id: 3,
            icon: "../../image/nav_video_icon.png",
            title: "视频"
        },
        {
            id: 4,
            icon: "../../image/nav_more_icon.png",
            title: "拓展"
        },
        {
            id: 5,
            icon: "../../image/nav_html_icon.png",
            title: "前端"
        }
    ]
    return arr
}

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData

}