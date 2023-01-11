const listModel = require("../models/list");

// 渲染页面
function view(req, res) {
  const list = listModel.getUserList();
  // 第一个参数表示视图路径，默认在views下
  // 第二个参数表示传入html模板的参数
  res.render("list", {
    list,
  });
}

// 新增user
function addUser(req, res) {
  const newUser = listModel.addUser(req.body);
  res.send(newUser);
}

// 删除user
function removeUser(req, res) {
  const { id } = req.params;
  res.send(listModel.removeUserById(id));
}

module.exports = {
  view,
  addUser,
  removeUser,
};
