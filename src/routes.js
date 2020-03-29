const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');
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
// validação celebrate
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(),
    })
}), OngController.store);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}),ProfileController.list);

routes.get('/incident', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),incidentController.list)

routes.post('/incident', incidentController.store);

routes.delete('/incident/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentController.delete)

module.exports = routes;
