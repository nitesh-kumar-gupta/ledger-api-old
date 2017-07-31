import User from './../models/User';
import Account from './../models/Account';
import Errors from './../../config/constants/errors';

class AccountsHelper {
    static async getAccount(id) {
        return await Account.find({ customer: id, active: true });
    }
}
export default AccountsHelper;