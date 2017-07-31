import express from 'express';
import userController from './../../../app/controllers/v1/userController';
import accountController from './../../../app/controllers/v1/accountController'
import IsAuthenticated from './../../middleware/isAuthenticated';
import IsAdmin from './../../middleware/isAdmin';
const routes = express();
routes.get('/', userController.getUserV1);
routes.post('/login', userController.login);
routes.post('/signup', userController.signup);
routes.put('/logout', IsAuthenticated, userController.logout);
routes.get('/getUser/:id?', IsAuthenticated, userController.getUser);
routes.put('/updateUser/:id?', IsAuthenticated, userController.updateUser);

// routes.get('/user/account/summary/:id', IsAuthenticated, accountController.getAccountSummary)

export default routes;