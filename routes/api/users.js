const express = require("express");
const auth = require("../../middlewares/auth");
const validateBody = require("../../middlewares/validateBody");

const router = express.Router();
// const upload = require("../../middlewares/upload");
const { users: controller } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");
const { updateUserSchema, subscribeEmailSchema } = require("../../models/user");

router.get("/current", auth, errorHandler(controller.getCurrent));
router.patch(
  "/update",
  auth,
  validateBody(updateUserSchema),
  errorHandler(controller.updateUser)
);
router.post(
  "/subscribe",
  auth,
  validateBody(subscribeEmailSchema),
  errorHandler(controller.subscribeEmail)
);

module.exports = router;
