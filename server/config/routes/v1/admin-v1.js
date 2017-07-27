import express from 'express';
import adminController from './../../../app/controllers/v1/adminController';
import IsAuthenticated from './../../middleware/isAuthenticated';
import IsAdmin from './../../middleware/isAdmin';
const routes = express();
routes.get('/customers/:id', IsAuthenticated, IsAdmin, adminController.getCustomer);
routes.post('/customer/add', IsAuthenticated, IsAdmin, adminController.addCustomer);
routes.put('/customer/update/:id', IsAuthenticated, IsAdmin, adminController.updateCustomer);
routes.delete('/customer/delete/:id', IsAuthenticated, IsAdmin, adminController.deleteCustomer);

export default routes;