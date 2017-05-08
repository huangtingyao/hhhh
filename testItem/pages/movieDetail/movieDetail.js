// pages/movieDetail/movieDetail.js


Page({
  data:{
    scrollHeight:0,
    list:[],
    hidden:true,
    scrollTop:0,
    array: [{
      namelist: '速度与激情8',
    }, {
      namelist: '大话西游'
    },{
      namelist:'逃出绝命镇'
    },{
      namelist: '攻壳机动队'
    }],
    datelist:[
      '2017-01-1','2017-02-21','2017-03-04','2017-04-10','2017-05-08'
    ], 
    imglist:[
    {url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1427074105,2015028670&fm=58&s=4A81E90848B90FA13C11A4CC0300C0B3',
name:'速度与激情8',
detail:'aaaa看电视了房间的撒娇都温泉蛋无群饿，同日而语突然一天大概撒范德萨，规范好几个卡第三方两年来跨境电商。'   
},{url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512950388,1721853654&fm=58&s=B6286EA49C1073CC5312A9E70300B01B',
name:'大话西游',
detail:'bbbb看电视了房间..h电视了房间的撒娇都温泉蛋无群饿，同日而语突然一天大概撒范德萨，规范好几个卡第hh,浩丰科技的说法'   
},{url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1407520566,1713972529&fm=58&s=7851A144DBFDBA5904F05105030070C8',
name:'逃出绝命镇',
detail:'cccc绝对是客户积分的我你看就是电脑付款就是来访多了三，多福多寿过分的话规范，'   
},{url:'http://img3.imgtn.bdimg.com/it/u=1954849729,4021317348&fm=23&gp=0.jpg',
name:'别有动机',
detail:'ddd绝对是客户积分的我你看就是电脑付款就是来访多了三，多福多寿过分的话规范，'   
},{url:'http://img3.imgtn.bdimg.com/it/u=3806059177,2996847990&fm=23&gp=0.jpg',
name:'脱轨时代',
detail:'付款就是来访多了，你今年电脑付款就是来访多了三，多福多寿过分的话规范，'   
},{url:'http://img4.imgtn.bdimg.com/it/u=1837589347,2670238867&fm=23&gp=0.jpg',
name:'闪着泪光的微笑',
detail:'欺骗我换个地方渗透压比基尼明年就差不多双方各黄金进口，分的话规范，'   
},{url:'http://img5.imgtn.bdimg.com/it/u=2994617485,400995622&fm=23&gp=0.jpg',
name:'血滴子',
detail:'每次都是立刻发出，就是电脑付款就是来访多了三，多福多寿过分的话规范，'   
},{url:'http://img4.imgtn.bdimg.com/it/u=3616548658,1903603858&fm=23&gp=0.jpg',
name:'无人区',
detail:'能吃苦的设计费建立健全噢巫婆你差不多是否合理肯定是个啥，类似看法皮尔就搜到，'   
}
      

  ]
    
  },
  
})