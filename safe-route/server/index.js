require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const port = process.env.PORT || 3001;

const { authenticateUser, createNewUser } = require(`./controllers/authCtrl`);
massive(process.env.DATABASE_KEY)
  .then(db => app.set("db", db))
  .catch(error => {
    console.log(`ERROR IN DATABASE KEY : => ${error}`);
  });

app.use(json());
app.use(cors());

//--------------USER AUTHENTICATION------------------
app.post("/api/authenticate_user/:id", authenticateUser);
app.post("/api/create_new_user/:id", createNewUser);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
