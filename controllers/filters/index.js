const errorHandler = require("../../helpers/errorHandler");

const getAllCategories = require("./getAllCategories");
const getAllIngredients = require("./getAllIngredients");
const getAllGlasses = require("./getAllGlasses");

module.exports = {
  getAllCategories: errorHandler(getAllCategories),
  getAllIngredients: errorHandler(getAllIngredients),
  getAllGlasses: errorHandler(getAllGlasses),
};
