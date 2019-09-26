/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')

const { randomInt, randomD, randomRolls } = require('./utils')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'This service generates a random number.' })
})

// Random number route
// Test this route with: http://localhost:4000/random?n=99
// Where n=99 sets the range of the random number returned
app.get('/random', (req, res) => {
  const { n } = req.query
  const value = randomInt(n)
  res.json({ value })
})

app.get('/randomD', (req, res) => {
  const { n } = req.query;
  if (n <= 1) {
    res.json('Must be More than 1')
  }
  const value = randomD(n)
  res.json({ value })
})

// /random?n=3&s=6
app.get('/randomrolls', (req, res) => {
  const { n, s } = req.query
  const rolls = randomRolls(n, s)
  res.json({ rolls }) // { "rolls": [1,2,3] }
})

app.get('/random/:d', (req, res) => {
  const { d } = req.params
  const value = randomInt(d)
  res.json({ value })
})

app.get('/random/die/:d', (req, res) => {
  const { d } = req.params
  if (d <= 1) {
    res.json('Must be More than 1')
  }
  const value = randomD(d)
  res.json({ value })
})

app.get('/random/dice/:n/:s', (req, res) => {
  const { n, s } = req.params
  const rolls = randomRolls(n, s)
  res.json({ rolls })
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
