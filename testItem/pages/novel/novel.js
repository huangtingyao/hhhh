// pages/novel/novel.js
Page({
  data:{
    imgUrl: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3714498872,1463279573&fm=23&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=2061120071,720147305&fm=23&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563088590,2351910344&fm=23&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4153883592,2976256257&fm=23&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1260963611,1962641344&fm=23&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2358364924,3337964330&fm=23&gp=0.jpg'
      
    ],
    novelList:[
      {url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2342681690,829600961&fm=23&gp=0.jpg',
      name:'倾世嫡女',
      author:'雪莹菲',
      style:'穿越奇情'
     },{url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3842957393,3046954282&fm=23&gp=0.jpg',
      name:'瑾年遇你，终不得',
      author:'雪莹菲',
      style:'豪门世家'
      },{url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=9360159,509795564&fm=23&gp=0.jpg',
      name:'那年那些',
      author:'雪莹菲',
      style:'现代言情'
      },{url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4075016133,2060074798&fm=23&gp=0.jpg',
      name:'凰血',
      author:'雪莹菲',
      style:'东方玄幻'
      }

    ],
    List:[
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

    ]
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})