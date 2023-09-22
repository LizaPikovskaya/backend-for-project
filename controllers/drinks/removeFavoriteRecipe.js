const { recipesModel } = require('../../models/recipesModel');
const  HttpError = require('../../helpers/HttpError');

const removeFavoriteRecipe = async (req, res) => {
    const { recipeId } = req.body;
     const userId = req.user.id;
    // const  userId  ="650c58ce53146d03476d1d1c"
    const recipe = await recipesModel.findById(recipeId);
    const idx = recipe.favorites.findIndex(elem => elem === userId );
    if ( idx < 0) { throw HttpError(404, 'Сocktail has already been deleted!') } 
        else { recipe.favorites.splice(idx,1);
               await recipe.save() };
    res.status(201).json({
        code: 201,
        message: 'success',
        data: recipe,
    });
};

module.exports = removeFavoriteRecipe;