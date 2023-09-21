const { Schema, model } = require("mongoose");
const Joi = require("joi");
const errorMongooseHandler = require("../helpers/errorMongooseHandler");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: String,
    avatarURL: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", errorMongooseHandler);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp),
  name: Joi.string().min(2),
});

const subscribeEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp),
});
const User = model("user", userSchema);

module.exports = {
  User,
  registerSchema,
  loginSchema,
  verifyEmailSchema,
  updateUserSchema,
  subscribeEmailSchema,
};
