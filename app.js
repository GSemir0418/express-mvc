const Express = require("express");
const router = require('./router')
const { join } = require("path");
// 实例化express应用
const app = new Express();

// 指定模版引擎
app.set("view engine", "ejs");
// 绑定静态资源目录
app.use(Express.static(join(__dirname, "public")));
// 注册路由
app.use(router)

// 监听8080端口
app.listen(8080, () => {
  console.log("start");
});
