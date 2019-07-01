require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");

const {
  singleCoffeeshopResolver,
  coffeeshopsResolver,
  commentsResolver,
  singleCommentResolver,
  createCoffeeshopResolver,
  createCommentResolver
} = require("./schema/resolvers");

// allow cross origin requests
app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Database connection established."))
  .catch(err => console.log("Error connecting to the database: ", err));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: {
      coffeeshop: singleCoffeeshopResolver,
      coffeeshops: coffeeshopsResolver,
      comment: singleCommentResolver,
      comments: commentsResolver,
      createCoffeeshop: createCoffeeshopResolver,
      createComment: createCommentResolver
    },
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("hello from app!");
});

app.listen(4000, () => {
  console.log("Coffeehub is up on port 4000!");
});
