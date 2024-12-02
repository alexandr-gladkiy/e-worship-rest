const Router = require('express');
const soundRouter = new Router();
const soundController = require('../controllers/sound_controller');

soundRouter.post('/sound', soundController.createSound);
soundRouter.get('/sounds', soundController.getSounds);
soundRouter.get('/sound/:id', soundController.getOneSound);
soundRouter.put('/sound/:id', soundController.updateSound);
soundRouter.delete('/sound/:id', soundController.deleteSound);

module.exports = soundRouter;