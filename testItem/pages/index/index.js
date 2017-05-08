//index.js
//获取应用实例
var app = getApp()
console.log(app);
Page({
  //getInitialState==>data
  data: {
    scrollHeight:200,
    motto: 'Hello World',
    movielist:[
      {name:'银河护卫队2',grade:'8.3',year:'2017年(美国)',actor:'克里斯普拉特'},
      {name:'摔跤吧！爸爸',grade:'8.8',year:'2017年(印度)',actor:'克里斯普拉特'},
      {name:'灵狼传奇',grade:'5.9',year:'2017年(俄罗斯)',actor:'克里斯普拉特'},
      {name:'春娇救志明',grade:'7.6',year:'2017年(中国内地)',actor:'克里斯普拉特'},
      {name:'记忆大师',grade:'6.3',year:'2017年(中国)',actor:'克里斯普拉特'},
      {name:'喜欢你',grade:'8.0',year:'2017年(中国)',actor:'克里斯普拉特'},
      {name:'拆弹专家',grade:'7.7',year:'2017年(中国香港)',actor:'克里斯普拉特'},
      {name:'午夜惊魂路',grade:'5.2',year:'2017年(中国)',actor:'克里斯普拉特'},
      {name:'傲娇与偏见',grade:'8.3',year:'2017年(中国)',actor:'克里斯普拉特'}
    ],
    list:[
      {name:'南方小城',singer:'曹方'},
      {name:'千古（《花千骨》）',singer:'阿兰'},
      {name:'好久不见',singer:'陈奕迅'},
      {name:'没那么简单',singer:'未知歌手'},
      {name:'传奇',singer:'王菲'},
      {name:'以后的以后',singer:'庄心妍'},
      {name:'下一秒',singer:'张碧晨'},
      {name:'成都',singer:'赵雷'},
      {name:'我一个人(Alone)',singer:'SISTAR'},
      {name:'广岛之恋',singer:'莫文蔚'},
      {name:'爱很美',singer:'刘佳'},
      {name:'Rolling In The Deep',singer:'Adele'},
      ],
      novelList:[
      {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2484121365,1012183040&fm=23&gp=0.jpg',
      name:'倾世嫡女',
      author:'雪莹菲',
      style:'穿越奇情',
       detail:'青春年少，最放荡不羁、却也最懵懂美好的夸姣时代，将那时我们的年少轻狂进行释读  ... '},{url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4189491925,882485181&fm=23&gp=0.jpg',
      name:'瑾年遇你，终不得',
      author:'雪莹菲',
      style:'豪门世家',
      detail:'一场变故，她从此变得妄自尊大不可一世，阴冷腹黑的她让所有的人闻其名而畏惧 ...'},{url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=658208466,3568013092&fm=23&gp=0.jpg',
      name:'那年那些',
      author:'雪莹菲',
      style:'现代言情',
      detail:'一直平淡，他活的简简单单没有波澜壮阔，没有跌宕起伏，他只是个暖男中的逗比... '},{url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2012779232,1972726589&fm=23&gp=0.jpg',
      name:'凰血',
      author:'雪莹菲',
      style:'东方玄幻',
      detail:'寻常的相遇，却给了他们不寻常的...'},
{url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2983303154,3564157095&fm=23&gp=0.jpg',
name:'那年初夏的海',
authoy:'肆歌',
style:'清新纯美',
detail:'一场变故，她从此变得妄自尊大不可一世，阴冷腹黑的她让所有的人闻其名而畏惧 ...'

      },{url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=391359129,2880114321&fm=23&gp=0.jpg',
      name:'瑾年遇你，终不得',
      author:'雪莹菲',
      style:'豪门世家',
      detail:'她本是黑帮的一号杀手,却穿越时空,附身到了将军的嫡女身上,继母的刁难,姐妹的明争暗斗。'},{url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2322129808,2395503785&fm=23&gp=0.jpg',
      name:'那年那些',
      author:'雪莹菲',
      style:'现代言情',
      detail:'她本是黑帮的一号杀手,却穿越时空,附身到了将军的嫡女身上,继母的刁难,姐妹的明争暗斗...'},{url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1435095970,2263851194&fm=23&gp=0.jpg',
      name:'凰血',
      author:'雪莹菲',
      style:'东方玄幻',
      detail:'好啊,你们不是处处刁难吗?我就让你们尝尝我的反击……'},
{url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1492359553,3535778368&fm=23&gp=0.jpg',
name:'那年初夏的海',
authoy:'肆歌',
style:'清新纯美',
      detail:'寻常的相遇，却给了他们不寻常的...'

      }

    ],
    condition:true,
    
    imgUrls: [
      'http://img3.imgtn.bdimg.com/it/u=1209994753,3939206892&fm=23&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2089761881,4101216484&fm=23&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2529455103,1329275734&fm=23&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=409328783,876141029&fm=23&gp=0.jpg'
    ],
    toView: 'red',
    scrollTop: 100
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({//导航到
      url: '../me/me'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      //setState==>setData
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
