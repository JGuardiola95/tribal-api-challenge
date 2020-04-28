require('dotenv').config()
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const { getPeople, getMusic, getMovies, getShows } = require("./services") // Utilities


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/search', (req, res, next) => {
  let term = req.query.term
  Promise.all([getPeople(term), getMusic(term), getMovies(term), getShows(term)]).then(values => {
    return res.status(200).json(values)
  });


})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + (process.env.PORT ? process.env.PORT : 3000))
})