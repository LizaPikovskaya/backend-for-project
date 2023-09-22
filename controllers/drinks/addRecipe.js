const { recipesModel, schema } = require('../../models/recipesModel');
const  HttpError = require('../../helpers/HttpError');

const addRecipe = async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400);
        throw HttpError(400, 'Provide all fields data');
    }
    const { _id } = req.user;
    const result = await recipesModel.create({ ...req.body, owner: _id });
    res.status(201).json({
        code: 201,
        message: 'success',
        data: result,
    });
};

module.exports = addRecipe;