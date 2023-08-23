const express = require("express");
const router = express.Router();

const { users: controller } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");

router.post("/register", errorHandler(controller.register));
router.post("/login", errorHandler(controller.login));

module.exports = router;
