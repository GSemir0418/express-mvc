const { Router } = require("express");
const listController = require('../controllers/list.js')
const detailController = require('../controllers/detail.js')
const bodyParser = require("body-parser");

const router = new Router();

router.get("/list", listController.view);
router.get("/detail/:id", detailController.view);

module.exports = router