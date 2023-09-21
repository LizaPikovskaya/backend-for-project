const { recipesModel } = require('../../models/recipesModel');
const  HttpError = require('../../helpers/HttpError');

const getRecipeById = async (req, res) => {
    const { adult } = req.user;
   // const adult = false;
 const id = req.params.recipeId;
 console.log('controll getRecipeById ', id);
 const recipe = await recipesModel.findById(req.params.recipeId);
 if (recipe.alcoholic === "Alcoholic") {
    if (!adult) {
        throw HttpError(404, 'Not found');
    }
 }
 res.status(200).json({
    code: 200,
    message: 'success',
    data: recipe,
 });
}

module.exports = getRecipeById;