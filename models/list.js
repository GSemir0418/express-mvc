const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

// 获取全部数据
function getUserList() {
  const userData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/user.json"), "utf-8")
  );
    return userData
}

module.exports = {
    getUserList
}