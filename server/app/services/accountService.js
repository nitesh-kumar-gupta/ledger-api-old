import _ from 'lodash';
import Account from './../models/Account';
import AccountHelper from './../helpers/accountHelper';
import UserHelper from './../helpers/userHelper';
import Errors from './../../config/constants/errors';
import Success from './../../config/constants/success';
class accountService {
    constructor(account) {
        this.account = account;
    }
    async addAccount() {
        try {
            let account = new Account(this.account);
            let balance = account.credit - account.debit;
            account = await account.save();
            let customer = await UserHelper.getUser(this.account.customer);
            console.log('***********************');
            console.log(customer, this.account);
            console.log('***********************');
            customer.balance = customer.balance + balance;
            customer.save();
            return {
                status: true,
                success: Success.S_ACCOUNT_CREATED,
                data: account
            }
        } catch (err) {
            console.log('errorororor', err);
            return {
                status: false,
                error: err
            }
        }
    }
    async updateAccount(id, data) {
        let account = await Account.findById(id);
        let oldbalance = account.credit - account.debit;
        let newbalance = data.credit - data.debit;
        let balance = newbalance - oldbalance;
        let customer = await UserHelper.getUser(account.customer);
        customer.balance = customer.balance + balance;
        customer.save();
        account = _.assign(account, data);
        return await account.save();
    }
}
export default accountService;