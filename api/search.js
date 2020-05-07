const { getMovies, getPeople, getShows, getMusic } = require("../services/search")

module.exports = (app, swaggerUi) => {
  /**
   * @swagger
   * /search:
   *  get:
   *    description: Use to request a search for People, Music, Movies and Shows
   *    parameters:
   *      - in: query
   *        name: term
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: A successful response of results
   */
  app.get('/search', (req, res, next) => {
    let term = req.query.term
    Promise.all([getPeople(term), getMusic(term), getMovies(term), getShows(term)]).then(values => {
      let mergedValues = [].concat(...values)
      if (mergedValues.length <= 0) {
        return res.status(200).json({
          resultCount: mergedValues.length,
          results: [],
          msg: 'No results'
        })
      }
      let result = {
        resultCount: mergedValues.length,
        results: mergedValues
      }
      return res.status(200).json(result)
    }).catch(err => console.log('ERROR', err));
  })
}