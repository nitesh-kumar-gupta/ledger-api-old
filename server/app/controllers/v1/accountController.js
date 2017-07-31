import accountService from './../../services/accountService';
import accountHelper from './../../helpers/accountHelper';
import Success from './../../../config/constants/success';
import Errors from './../../../config/constants/errors';
import Response from './../../../config/responses/response';

const accountController = {
    getAccount: async (req, res) => {
        let account = await accountHelper.getAccount(req.params.id);
        let data = {
            status: true,
            success: Success.S_OK,
            data: account
        };
        Response.response(res, data);
    },
    addAccount: async (req, res) => {
        req.body.customer = req.params.id;
        const _accountService = new accountService(req.body);
        const account = await _accountService.addAccount();
        Response.response(res, account);
    },
    updateAccount: async (req, res) => {
        const _accountService = new accountService();
        const account = await _accountService.updateAccount(req.params.id, req.body);
        Response.response(res, account);
    }
};
export default accountController;
