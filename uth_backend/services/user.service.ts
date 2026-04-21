const UserModel = require("../models/user.model");
module.exports.createUser = async ({
  fullName,
  email,
  phoneNumber,
  password,
  userId,
  role,
}) => {
  if (!fullName || !email || !phoneNumber || !password) {
    throw new Error("All fields are required");
  }

  let newUser = {};

  if (role) {
    newUser = {
        userId,
      fullName,
      email,
      phoneNumber,
      password,
      role,
    };
  } else {
    newUser = {
      userId,
      fullName,
      email,
      phoneNumber,
      password,
    };
  }

  const user = UserModel.create(newUser);

  return user;
};
