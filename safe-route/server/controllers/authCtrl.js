const bcrypt = require("bcrypt");
const saltRounds = 10;

const authenticateUser = (req, res) => {
  const { password } = req.body;
  const { id } = req.params;
  console.log("hit");
  req.app
    .get("db")
    .get_user_password(id)
    .then(response => {
      response[0].user_password;
    });
};
const createNewUser = (req, res) => {};

module.exports = {
  authenticateUser,
  createNewUser
};
