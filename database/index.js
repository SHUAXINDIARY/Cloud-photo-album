let db = wx.cloud.database();
let add = (collectionName,data) => {
  db.collection(collectionName).add({
    // data 字段表示需新增的 JSON 数据
    data:data,
    success: function(res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log("添加成功", res);
    },
    fail(err) {
      console.log("添加失败", err);
    },
  })
};
module.exports = {
  add:add
}
