module.exports = {
  swaggerDefinition: {
    info: {
      title: 'API CHALLENGE',
      description: 'Documentación visual de la API para Tribal Worldwide',
      contact: {
        name: 'José Guardiola'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['server.js', 'api/search.js']
}