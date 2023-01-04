const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

function getUserInfoById(id) {
    const userData = JSON.parse(
        readFileSync(resolve(__dirname, "../data/user.json"), "utf-8")
      );
    const user = userData.find(item=>item.id==id)
    return user
}

module.exports = {
    getUserInfoById
}