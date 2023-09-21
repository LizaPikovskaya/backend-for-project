const HttpError = require("../../helpers/HttpError");
const { User } = require("../../models/user");

const updateUser = async (req, res) => {
  const { name, email } = req.body;

  let updates = {};
  if (name) updates.name = name;
  if (email) updates.email = email;

  console.log(req.user._id);

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: updates },
    { new: true }
  );

  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = updateUser;
