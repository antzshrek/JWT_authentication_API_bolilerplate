const publicRoutes = require('express').Router();
const userController = require('../../controllers/user');

publicRoutes.post('/user/register', userController.register);
publicRoutes.post('/user/login', userController.login);

module.exports = publicRoutes;