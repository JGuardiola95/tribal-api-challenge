require('dotenv').config()
const fs = require('fs');
const express = require('express')
const { getPeople, getMusic, getMovies, getShows } = require("./services") // Utilities


const app = express()

app.get('/search', (req, res, next) => {
  let term = req.query.term
  Promise.all([getPeople(term), getMusic(term), getMovies(term), getShows(term)]).then(values => {
    let mergedValues = [].concat(...values)
    if (mergedValues.length <= 0) {
      return res.status(200).json({resultCount: mergedValues.length, results: [], msg: 'No results'})
    }
    let result = {resultCount: mergedValues.length, results: mergedValues}
    return res.status(200).json(result)
  });
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + (process.env.PORT ? process.env.PORT : 3000))
})