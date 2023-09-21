const express = require("express");
const router = express.Router();
const { drinks } = require("../../controllers/index");
const auth = require("../../middlewares/auth");
const errorHandler = require("../../helpers/errorHandler");

router.get("/mainpage", auth, errorHandler(drinks.getMainPage));
router.get("/:recipeId", auth, errorHandler(drinks.getRecipeById));

module.exports = router;