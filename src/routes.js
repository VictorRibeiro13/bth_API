const express = require('express');
const routes = express.Router();

/**
 *  query params -> request.query
 *  route params -> request.params
 *  request body -> request.body
 */

const OngController = require('./Controllers/OngController');
const incidentController = require('./Controllers/incidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

routes.post('/session',SessionController.search )

routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.list);

routes.get('/incident', incidentController.list)
routes.post('/incident', incidentController.store);
routes.delete('/incident/:id', incidentController.delete)

module.exports = routes;
