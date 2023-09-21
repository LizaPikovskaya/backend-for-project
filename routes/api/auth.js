const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
// const upload = require("../../middlewares/upload");
const { auth: controller } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");

router.post("/signup", errorHandler(controller.register));
router.post("/signin", errorHandler(controller.login));
router.post("/signout", auth, errorHandler(controller.logout));

module.exports = router;
