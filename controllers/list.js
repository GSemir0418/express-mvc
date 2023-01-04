const listModel = require("../models/list");

function view(req, res) {
  const list = listModel.getUserList();
  // 第一个参数表示视图路径，默认在views下
  // 第二个参数表示传入html模板的参数
  res.render("list", {
    list,
  });
}

module.exports = {
  view,
};
