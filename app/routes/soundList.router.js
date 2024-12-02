const Router = require('express');
const soundListRouter = new Router();
const soundListController = require('../controllers/soundList.controller');

soundListRouter.post('/sound_list', soundListController.createSoundList);
soundListRouter.get('/sound_lists', soundListController.getSoundLists);
soundListRouter.get('/sound_list/:id', soundListController.getOneSoundList);
soundListRouter.put('/sound_list/:id', soundListController.updateSoundList);
soundListRouter.delete('/sound_list/:id', soundListController.deleteSoundList);

module.exports = soundListRouter;