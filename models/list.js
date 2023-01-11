const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

// 获取全部数据
function getUserList() {
  const userData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/user.json"), "utf-8")
  );
  return userData;
}

// 新增user
function addUser(user) {
  const userData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/user.json"), "utf-8")
  );
  userData.push({ ...user, id: userData[userData.length - 1].id + 1 });
  writeFileSync(
    resolve(__dirname, "../data/user.json"),
    JSON.stringify(userData)
  );
  return userData[userData.length - 1];
}

// 删除user
function removeUserById(id) {
  let userData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/user.json"), "utf-8")
  );
  userData = userData.filter((item) => item.id != id);
  writeFileSync(
    resolve(__dirname, "../data/user.json"),
    JSON.stringify(userData)
  );
  return id;
}

module.exports = {
  getUserList,
  addUser,
  removeUserById,
};
