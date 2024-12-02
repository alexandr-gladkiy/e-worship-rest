const Router = require('express');
const userGroupRouter = new Router();
const userGroupController = require('../controllers/userGroup.controller');

userGroupRouter.post('/userGroup', userGroupController.createUserGroup);
userGroupRouter.get('/userGroups', userGroupController.getUserGroups);
userGroupRouter.get('/userGroup/:id', userGroupController.getOneUserGroup);
userGroupRouter.put('/userGroup/:id', userGroupController.updateUserGroup);
userGroupRouter.delete('/userGroup/:id', userGroupController.deleteUserGroup);

module.exports = userGroupRouter;