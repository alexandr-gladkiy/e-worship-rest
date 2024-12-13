const Router = require('express');
const userRouter = new Router();
const User= require('../controllers/user_controller');

userRouter.post('/user', User.create);
userRouter.get('/users', User.getList);
userRouter.get('/user/:id', User.getOne);
userRouter.put('/user/:id', User.update);
userRouter.delete('/user/:id', User.delete);

module.exports = userRouter;