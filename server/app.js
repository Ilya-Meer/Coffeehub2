require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

mongoose.connect(process.env.URL);
mongoose.connection.once('open', () => {
  console.log('Database connection established.')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send('hello from app!');
})

app.listen(4000, () => {
  console.log('Coffeehub is up on port 4000!');
})