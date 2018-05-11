require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const port = process.env.PORT || 3001;

const {
  authenticateUser,
  createNewUser,
  getUser,
  logout
} = require(`./controllers/authCtrl`);

massive(process.env.DATABASE_KEY)
  .then(db => app.set("db", db))
  .catch(error => {
    console.log(`ERROR IN DATABASE KEY : => ${error}`);
  });

app.use(json());
app.use(cors());

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.post("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false, //only have a session if it was interacted with. Saves on storage.
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2 //2 days
    }
  })
);

//--------------USER AUTHENTICATION------------------
app.post("/api/authenticate_user", authenticateUser);
app.post("/api/create_new_user", createNewUser);
app.post("/api/logout", logout);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
