require('dotenv').config()
const cors = require('cors');
const fs = require('fs');
const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiSearch = require("./api/search");
const swaggerOptions = require("./config/swagger");

const app = express()

app.use(cors());
apiSearch(app, swaggerUi);

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + (process.env.PORT ? process.env.PORT : 3000))
})