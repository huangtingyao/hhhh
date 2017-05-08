// pages/movie/moive.js
Page({
  data:{
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
    
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
     var that = this;
    wx.request({
      url: 'http://www.htydayaoge.online/music/movie.php', 
      dataType:'json',
      success: function(res) {
        console.log(res)
       that.setData({
         movieList:res.data
       })
      }
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