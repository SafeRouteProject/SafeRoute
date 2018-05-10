const bcrypt = require("bcrypt");
const saltRounds = 10;
const _ = require("lodash");

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
        req.session.user = _.omit(response[0], "user_password");
        //USER ON SESSIONS
        res.status(201).send(_.omit(response[0], "user_password"));
        //SENDS NEW USER BACK EXCEPT PASSWORD
      })
      .catch(err => {
        res.status(500).send(`Here is ${err}`);
      });
  });
};
const authenticateUser = (req, res) => {
  const { password, email, userName } = req.body;
  //USER CAN EITHER AUTHENTICATE BY EMAIL OR USERNAME
  if (userName) {
    req.app
      .get("db")
      .get_password_by_username(userName)
      .then(response => {
        bcrypt.compare(password, response[0].user_password, (err, hashRes) => {
          hashRes
            ? res
                .status(200)
                .send(
                  _.omit(response[0], "user_password"),
                  (req.session.user = _.omit(response[0], "user_password"))
                )
            : res.status(401).send({ message: "Incorrect password" });
        });
      })
      .catch(err => {
        res.status(400).send({ message: "Incorrect username" });
      });
  } else {
    req.app
      .get("db")
      .get_password_by_email(email)
      .then(response => {
        bcrypt.compare(password, response[0].user_password, (err, hashRes) => {
          hashRes
            ? res
                .status(200)
                .send(
                  _.omit(response[0], "user_password"),
                  (req.session.user = _.omit(response[0], "user_password"))
                )
            : res.status(401).send({ message: "Incorrect password" });
        });
      })
      .catch(err => {
        res.status(400).send({ message: "Incorrect email" });
      });
  }
};
const logout = (req, res) => {
  req.session.destroy().then(response => {
    res.redirect("/");
  });
};

module.exports = {
  createNewUser,
  authenticateUser,
  logout
};
