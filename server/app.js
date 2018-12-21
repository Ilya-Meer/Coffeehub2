const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from app!');
})

app.listen(4000, () => {
  console.log('Coffeehub is up!');
})