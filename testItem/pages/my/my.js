// pages/my/my.js
var app = getApp()
console.log(app);
Page({
  data:{
    userInfo: {
      nickName:'大瑶哥。。。'
    },
    myList:[
      {name:'我的余额',icon:''},
      {name:'我的代金券',icon:''},
      {name:'我的等级',icon:''},
      {name:'包月特权',icon:''},
      {name:'福利周周送',icon:''},
      {name:'购买记录',icon:''},
      {name:'充值记录',icon:''},
      {name:'浏览记录',icon:''},
      {name:'帮助反馈',icon:''},
      {name:'创作中心',icon:''},
      {name:'了解详情',icon:''}
    ]
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