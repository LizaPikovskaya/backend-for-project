const { Schema, model } = require('mongoose');
const Joi = require('joi');
const errorMongooseHandler = require("../helpers/errorMongooseHandler");

const recipesSchema = new Schema(
    {
        drink:{
            type:String,
        },
        drinkAlternate:{
            type:String,
        },
        tags:{
            type:String,
        },
        video:{
            type:String,
        },
        category:{
            type:String,
        },
        IBA:{
            type:String,
        },
        alcoholic:{
            type:String,
        },
        glass:{
            type:String,
        },
        description:{
            type:String,
        },
        instructions:{
            type:String,
        },
        instructionsES:{
            type:String,
        },
        instructionsDE:{
            type:String,
        },
        instructionsFR:{
            type:String,
        },
        instructionsIT:{
            type:String,
        },
        instructionsRU:{
            type:String,
        },
        instructionsPL:{
            type:String,
        },
        instructionsUK:{
            type:String,
        },
        drinkThumb:{
            type:String,
        },
        ingredients:{
            type:Array,
        },
        shortDescription:{
            type:String,
        },
    }
);

const recipesModel = model('recipes', recipesSchema);

module.exports = {
    recipesModel
};