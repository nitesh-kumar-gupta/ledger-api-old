// import accountService from './../../services/accountService';
import accountHelper from './../../helpers/accountHelper';
import Success from './../../../config/constants/success';
import Errors from './../../../config/constants/errors';
import Response from './../../../config/responses/response';

const accountController = {
    getAccountSummary: async (req, res) => {
        let account = await accountHelper.getUser(req.params.id ? req.params.id : req.user.id);
        let data = {
            status: false,
            error: Errors.E_USER_NOT_FOUND
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
export default accountController;
