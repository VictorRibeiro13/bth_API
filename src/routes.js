const express = require('express');
const routes = express.Router();

/**
 *  query params -> request.query
 *  route params -> request.params
 *  request body -> request.body
 */

const OngController = require('./Controllers/OngController');

routes.get('/ongs', OngController.list)

routes.post('/ongs', OngController.store);

module.exports = routes;
