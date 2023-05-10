const Router = require('express');
const router = new Router();
const soundController = require('./controller')

router.post('/sound', soundController.createSound);
router.get('/sounds', soundController.getSounds);
router.get('/sound/:id', soundController.getOneSound);
router.put('/sound/:id', soundController.updateSound);
router.delete('/sound/:id', soundController.deleteSound);



module.exports = router;