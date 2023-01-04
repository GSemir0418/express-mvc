const { Router } = require("express");
const bodyParser = require("body-parser");

const router = new Router();

router.get("/list", (req, res) => {
    // 第一个参数表示视图路径，默认在views下
    // 第二个参数表示参数
    res.render('list', {
        title: 'User List'
    })
});
router.get("/detail/:id", (req, res) => {
    res.render('detail', {
        title: 'Detail'
    })
});

module.exports = router