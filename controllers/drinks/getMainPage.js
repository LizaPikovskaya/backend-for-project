const { recipesModel } = require('../../models/recipesModel');

const getMainPage = async (req, res) => {
    console.log('controll Mainpage', req.body);
 const drinks = await recipesModel.find({});
 res.status(200).json({
    code: 200,
    quantity: drinks.length,
    data: drinks
 });
}

module.exports = getMainPage;