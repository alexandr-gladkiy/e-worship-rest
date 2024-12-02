const Router = require('express');
const eventRouter = new Router();
const eventController = require('../controllers/event.controller');

eventRouter.post('/event', eventController.createEvent);
eventRouter.get('/events', eventController.getEvents);
eventRouter.get('/event/:id', eventController.getOneEvent);
eventRouter.put('/event/:id', eventController.updateEvent);
eventRouter.delete('/event/:id', eventController.deleteEvent);

module.exports = eventRouter;