const express = require("express");
const router = express.Router();
const { drinks } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");

router.get("/mainpage", errorHandler(drinks.getMainPage));

module.exports = router;