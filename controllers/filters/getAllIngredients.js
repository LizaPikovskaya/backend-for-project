const HttpError = require("../../helpers/HttpError");
const { ingredientsModel } = require("../../models/ingredientsModel");

const getAllIngredients = async (req, res) => {
  const ingredients = await ingredientsModel.find({}).sort({ title: 1 });
  if (!ingredients) {
    throw HttpError(404, "Not Found");
  }
  res.json(ingredients);
};

module.exports = getAllIngredients;
