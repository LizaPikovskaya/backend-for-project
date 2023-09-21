const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
const upload = require("../../middlewares/upload");
const { users: controller } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");

router.post("/register", errorHandler(controller.register));
router.post("/login", errorHandler(controller.login));
router.get("/logout", auth, errorHandler(controller.logout));
router.get("/current", auth, errorHandler(controller.getCurrent));
router.patch(
  "/update",
  auth,
  upload.single("avatar"),
  errorHandler(controller.updateAvatar)
);
router.post("/subscribe", auth, errorHandler(controller.updateSubscription));

module.exports = router;
