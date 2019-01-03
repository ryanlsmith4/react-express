/* eslint-disable semi */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
app.get('/', (req, res) => {
  res.json({ hello: 'world' })
});

app.get('/test', (req, res) => {
  res.json({ test: 'foo' })
});

app.get('/random', (req, res) => {
  const value = Math.random() * 100000
  res.json({ value })
})

const port = 6000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
