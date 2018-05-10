const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUsers = (req, res) => {
  req.app
    .get("db")
    .get_users()
    .then(response => {
      res.status(200).send(response);
    });
};
const createNewUser = (req, res) => {
  const {
    userName,
    email,
    firstName,
    lastName,
    phoneNumber,
    password
  } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    req.app
      .get("db")
      .create_new_user([
        userName,
        email,
        firstName,
        lastName,
        phoneNumber,
        hash
      ])
      .then(response => {
        res.status(200).send("User created!");
      });
  });
};
const authenticateUser = (req, res) => {
  const { password } = req.body;
  const { id } = req.params;
  req.app
    .get("db")
    .get_user_password(id)
    .then(response => {
      bcrypt.compare(password, response[0].user_password, (err, hashRes) => {
        hashRes
          ? res.status(200).send({ message: "User authenticated" })
          : res.status(401).send({ message: "Unauthorized" });
      });
    });
};

module.exports = {
  createNewUser,
  authenticateUser,
  getUsers
};
