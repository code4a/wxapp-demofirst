import nutil from 'network_util.js';

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

/**
 * 刷新banner数据
 */
function refreshBannerData(callback) {
    var url = 'http://gank.io/api/data/福利/4/' + getRandomNum(1, 100);
    console.log('--- getBannerData --- ' + url)
    nutil._get(url,
        function (res) {
            console.log(res.data.results)
            callback(res.data.results)
        },
        function (res) {
            console.log(res.data.results)
            callback(getBannerData())
        });
}

/**
 * 生成随机数
 */
function getRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
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

/**
 * 获取测试数据
 */
function getTestAndroidData() {
    var arr = [
        {
            _id: "58a3b7c6421aa96631f16619",
            createdAt: "2017-02-15T10:07:02.301Z",
            desc: "图解 Android 事件分发机制",
            images: [
                "http://img.gank.io/1c9e0326-7d44-4b54-a523-b34fc939777a",
                "http://img.gank.io/1ebed9ec-6b82-450a-a7e6-248091d15388",
                "http://img.gank.io/2b83339d-5173-465c-bdb3-5526fcfc1947"
            ],
            publishedAt: "2017-02-15T11:24:04.127Z",
            source: "chrome",
            type: "Android",
            url: "http://www.jianshu.com/p/e99b5e8bd67b?utm_campaign=haruki&utm_content=note&utm_medium=reader_share&utm_source=weixin",
            used: true,
            who: "LHF"
        },
        {
            _id: "58a3c192421aa966366d05c7",
            createdAt: "2017-02-15T10:48:50.698Z",
            desc: "B 站开源了一款多媒体文件选择和编辑工具。",
            images: [
                "http://img.gank.io/48d6444c-c2c6-438a-a62f-566fe54f67a7"
            ],
            publishedAt: "2017-02-15T11:24:04.127Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/Bilibili/boxing",
            used: true,
            who: "代码家"
        },
        {
            _id: "58a2780e421aa901f7902c7d",
            createdAt: "2017-02-14T11:22:54.87Z",
            desc: "Material Design 风格的 About 页面",
            images: [
                "http://img.gank.io/1b5d9fb5-689c-4f5c-a33c-c2a9323ac87d",
                "http://img.gank.io/aaa8a306-3124-4197-ad4e-ff3deec459c8"
            ],
            publishedAt: "2017-02-14T11:42:37.303Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/jrvansuita/MaterialAbout",
            used: true,
            who: "代码家"
        },
        {
            _id: "58a27845421aa901f7902c7e",
            createdAt: "2017-02-14T11:23:49.435Z",
            desc: "Android 运行时主题切换小工具库",
            images: [
                "http://img.gank.io/a0976d17-8434-42fd-a438-3953046924d0",
                "http://img.gank.io/f5f1ea06-3c07-4174-863d-bd9f56fa1317"
            ],
            publishedAt: "2017-02-14T11:42:37.303Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/garretyoder/Colorful",
            used: true,
            who: "代码家"
        },
        {
            _id: "58a279a6421aa901f7902c7f",
            createdAt: "2017-02-14T11:29:42.995Z",
            desc: "用注解的方式，为 Android 加上桌面长按快捷方式，超实用哦。",
            images: [
                "http://img.gank.io/652f9aa3-0208-4319-a44f-4c86031b8c1e"
            ],
            publishedAt: "2017-02-14T11:42:37.303Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/MatthiasRobbers/shortbread",
            used: true,
            who: "MR"
        },
        {
            _id: "58a279b9421aa901f56d368e",
            createdAt: "2017-02-14T11:30:01.696Z",
            desc: "接手老项目，难免遇到前辈的硬编码,怎么办？利用工具剔除出来啊",
            publishedAt: "2017-02-14T11:42:37.303Z",
            source: "web",
            type: "Android",
            url: "https://github.com/Kutear/Fuck-Hard-Code",
            used: true,
            who: "KuTear"
        },
        {
            _id: "589ece26421aa92710db961a",
            createdAt: "2017-02-11T16:41:10.3Z",
            desc: "关于Android应用的耗电量的统计分析方法和工具",
            images: [
                "http://img.gank.io/f43faa62-8c4a-4eba-9c67-2142539dc2a5",
                "http://img.gank.io/bee4090a-26cb-4917-ad3f-e2a9b485f140"
            ],
            publishedAt: "2017-02-13T11:54:17.922Z",
            source: "web",
            type: "Android",
            url: "https://hujiaweibujidao.github.io/blog/2017/01/24/how-to-know-your-applications-battery-stats/",
            used: true,
            who: "潇涧"
        },
        {
            _id: "58a00b79421aa901ef405786",
            createdAt: "2017-02-12T15:15:05.362Z",
            desc: "一款优雅的遵循 Material Design 的开源音乐播放器",
            images: [
                "http://img.gank.io/9af611e5-7eb0-4c03-97ed-1798fba0019e",
                "http://img.gank.io/69dd5400-56bf-4455-b3ab-23912cdfb230"
            ],
            publishedAt: "2017-02-13T11:54:17.922Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/hefuyicoder/ListenerMusicPlayer",
            used: true,
            who: "Jason"
        },
        {
            _id: "58a1170e421aa901ef40578d",
            createdAt: "2017-02-13T10:16:46.298Z",
            desc: "虽然是个简单的 Android App，但是几乎囊括了多数很酷的 Android 库和开发方法，测试方法，相当赞的一个值得学习的项目。",
            images: [
                "http://img.gank.io/6a2b9df2-34b3-4b9d-bcfb-a5741e87760b"
            ],
            publishedAt: "2017-02-13T11:54:17.922Z",
            source: "chrome",
            type: "Android",
            url: "https://github.com/athkalia/Just-Another-Android-App",
            used: true,
            who: "代码家"
        },
        {
            _id: "58a129ff421aa901f7902c6e",
            createdAt: "2017-02-13T11:37:35.495Z",
            desc: "Android Notification 详解",
            images: [
                "http://img.gank.io/2c58c211-9685-4b4e-ba2c-c725a442095f"
            ],
            publishedAt: "2017-02-13T11:54:17.922Z",
            source: "web",
            type: "Android",
            url: "http://reezy.me/2016/12/28/android-notification/",
            used: true,
            who: "ezy"
        }
    ]
    return arr
}
/*
 * 对外暴露接口
 */
module.exports = {
    getBannerData: getBannerData,
    getIndexNavData: getIndexNavData,
    getTestAndroidData: getTestAndroidData,
    refreshBannerData: refreshBannerData
}