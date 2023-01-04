const { Router } = require("express");
const listController = require("../controllers/list.js");
const detailController = require("../controllers/detail.js");
const bodyParser = require("body-parser");

const router = new Router();
const jsonParser = bodyParser.json();

router.get("/list", listController.view);
router.get("/detail/:id", detailController.view);
router.post("/list/user", jsonParser, listController.addUser);

module.exports = router;
