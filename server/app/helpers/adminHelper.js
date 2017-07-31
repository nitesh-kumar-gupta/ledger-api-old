import User from './../models/User';
import Errors from './../../config/constants/errors';

class AdminHelper {
    static getCustomer(type) {
        var user = null;
        if (type === 'All')
            user = User.find({ type: { $ne: 'ADMIN' }, active: true });
        else
            user = User.findOne({ _id: type, type: { $ne: 'ADMIN' } });
        return user.exec((err, usr) => {
            if (err)
                throw err;
            return usr;
        });
    }
}
export default AdminHelper;