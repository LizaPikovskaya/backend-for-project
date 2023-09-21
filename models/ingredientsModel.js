const { Schema, model } = require('mongoose');
const Joi = require('joi');
const errorMongooseHandler = require("../helpers/errorMongooseHandler");

const ingredientsSchema = new Schema(
    {
        title:{
            type:String,
        },
        ingredientThumb:{
            type:String,
        },
        thumbMedium:{
            type:String,
        },
        thumbSmall:{
            type:String,
        },
        abv:{
            type:String,
        },
        alcohol:{
            type:String,
        },
        description:{
            type:String,
        },
        type:{
            type:String,
        },
        flavor:{
            type:String,
        },
        country:{
            type:String,
        }
    }
);

const ingredientsModel = model('ingredients', ingredientsSchema);

module.exports = {
    ingredientsModel
};