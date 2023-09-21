const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const HttpError = require("../../helpers/HttpError");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const subscribeEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    throw HttpError(400, "Email is required");
  }

  const msg = {
    to: email,
    from: "sergiimolchanovdublicate@gmail.com",
    subject: "Successful Subscription",
    html: "<strong>Thank you for subscribing to our content!</strong>",
  };

  await sgMail.send(msg);
  res.json({
    status: "success",
    code: 200,
    message: "Subscription email sent successfully.",
  });
};

module.exports = subscribeEmail;
