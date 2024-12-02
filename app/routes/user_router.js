const Router = require('express');
const userRouter = new Router();
const userController = require('../controllers/user_controller')

userRouter.post('/user', userController.createUser);
userRouter.get('/users', userController.getUsers);
userRouter.get('/user/:id', userController.getOneUser);
userRouter.put('/user/:id', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

module.exports = userRouter;