Page({
  onInfo:function(event){
    console.log(event.detail.userInfo);
    // 1. 获取数据库引用
    const db=wx.cloud.database();
    db.collection('USERINFO').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        nickname: event.detail.userInfo.nickName ,
       
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },
 
})