import _ from 'lodash';
import User from './../models/User';
import AdminHelper from './../helpers/adminHelper';
import UserHelper from './../helpers/userHelper';
import Errors from './../../config/constants/errors';
import Success from './../../config/constants/success';
class adminService {
    constructor(user, ip) {
        this.user = user;
        this.ip = ip;
    }
    async createCustomer() {
        try {
            var customer = await UserHelper.checkUserExistance(this.user.email);
            if (customer) {
                if (!customer.active)
                    customer.active = true;
                else if (customer.active)
                    throw Errors.E_DUPLICATE_CUSTOMER;
            }
            else
                customer = new User(this.user);
            customer.ips.push({
                ip: this.ip,
                at: new Date().toISOString()
            });
            customer.password = this.user.email;
            customer = await customer.save();
            return {
                status: true,
                success: Success.S_USER_CREATED,
                data: customer
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }
    async updateCustomer(id, data) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            let customer = await User.findById(id);
            customer = _.assign(customer, data);
            return customer.save();
        }
        return null;
    }
    async deleteCustomer(id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            let customer = await User.findById(id);
            customer.active = false;
            return customer.save();
        }
        return null;
    }
}
export default adminService;