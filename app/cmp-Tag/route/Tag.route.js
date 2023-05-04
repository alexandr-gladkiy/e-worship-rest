const Router = require('express');
const router = new Router();
const tagController = require('../controller/tag.controller');

router.post('/tag', tagController.createTag);
router.get('/tags', tagController.getTags);
router.get('/tag/:id', tagController.getOneTag);
router.put('/tag/:id', tagController.updateTag);
router.delete('/tag/:id', tagController.deleteTag);



module.exports = router;