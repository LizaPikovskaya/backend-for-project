const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const HttpError = require("../../helpers/HttpError");
const { User } = require("../../models/user");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const subscribeEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Email is required");
  }

  const msg = {
    to: email,
    from: "sergiimolchanovdublicate@gmail.com",
    subject: "Successful Subscription",
    // html: "<strong>Thank you for subscribing to our content!</strong>",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333333;">Welcome!</h2>
        <p style="font-size: 16px; line-height: 1.5; color: #666666;">Thank you for subscribing to our content! We're thrilled to have you on board.</p>
        <a href="https://yourwebsite.com" style="display: inline-block; padding: 10px 20px; color: #ffffff; background-color: #007BFF; border-radius: 3px; text-decoration: none;">Visit our website</a>
      </div>
    </div>
  `,
  };

  await sgMail.send(msg);

  const userID = req.user._id;

  await User.findByIdAndUpdate(userID, { subscriptionEmail: email });

  res.json({
    status: "success",
    code: 200,
    message: "Subscription email sent successfully.",
    email,
  });
};

module.exports = subscribeEmail;
