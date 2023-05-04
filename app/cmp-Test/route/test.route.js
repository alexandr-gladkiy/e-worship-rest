const Router = require('express');
const router = new Router();
const testController = require('../controller/test.controller');

router.post('/test', testController.createTest);



module.exports = router;