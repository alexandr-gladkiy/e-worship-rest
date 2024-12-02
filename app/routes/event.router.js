const Router = require('express');
const eventRouter = new Router();
const eventController = require('../controllers/event.controller');

eventRouter.post('/event', eventController.createSound);
eventRouter.get('/events', eventController.getSounds);
eventRouter.get('/event/:id', eventController.getOneSound);
eventRouter.put('/event/:id', eventController.updateSound);
eventRouter.delete('/event/:id', eventController.deleteSound);

module.exports = eventRouter;