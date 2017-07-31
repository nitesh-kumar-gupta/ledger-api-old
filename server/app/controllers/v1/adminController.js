import adminService from './../../services/adminService';
import adminHelper from './../../helpers/adminHelper';
import Success from './../../../config/constants/success';
import Errors from './../../../config/constants/errors';
import Response from './../../../config/responses/response';

const adminController = {
    getCustomer: async (req, res) => {
        let user = await adminHelper.getCustomer(req.params.id);
        let data = {
            status: false,
            error: Errors.E_CUSTOMER_NOT_FOUND
        };
        if (user)
            data = {
                status: true,
                success: Success.S_OK,
                data: user
            };
        Response.response(res, data);
    },
    addCustomer: async (req, res) => {
        const _adminService = new adminService(req.body, req.connection.remoteAddress);
        const customer = await _adminService.createCustomer();
        Response.response(res, customer);
    },
    updateCustomer: async (req, res) => {
        const _adminService = new adminService();
        let user = await _adminService.updateCustomer(req.params.id ? req.params.id : req.user.id, req.body);
        let data = {
            status: false,
            error: Errors.E_CUSTOMER_NOT_FOUND
        };
        if (user)
            data = {
                status: true,
                success: Success.S_OK,
                data: user
            };
        Response.response(res, data);
    },
    deleteCustomer: async (req, res) => {
        const _adminService = new adminService();
        let user = await _adminService.deleteCustomer(req.params.id ? req.params.id : req.user.id);
        let data = {
            status: false,
            error: Errors.E_CUSTOMER_NOT_FOUND
        };
        if (user)
            data = {
                status: true,
                success: Success.S_OK,
                data: user
            };
        Response.response(res, data);
    }
};
export default adminController;
