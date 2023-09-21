const { Schema, model } = require("mongoose");
const Joi = require("joi");
const errorMongooseHandler = require("../helpers/errorMongooseHandler");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
<<<<<<< HEAD
      required: [true, "Set name for user"],
=======
      required: [true, "Name is required"],
>>>>>>> MolchanovSergii-users_auth
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
<<<<<<< HEAD
    birthDate: {
      type: Date,
      required: [true, "BirthDate is required"],
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
    },
    subscription: {
      type: Boolean,
      default: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
=======
    token: String,
    avatarURL: String,
>>>>>>> MolchanovSergii-users_auth
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", errorMongooseHandler);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
  birthDate: Joi.date().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().required(),
});

<<<<<<< HEAD
=======
const updateUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp),
  name: Joi.string().min(2),
});

const subscribeEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp),
});
>>>>>>> MolchanovSergii-users_auth
const User = model("user", userSchema);

module.exports = {
  User,
  registerSchema,
  loginSchema,
  verifyEmailSchema,
  updateUserSchema,
  subscribeEmailSchema,
};
