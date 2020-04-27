require('dotenv').config()
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const soapRequest = require('easy-soap-request');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/search', (req, res, next) => {
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT)
})