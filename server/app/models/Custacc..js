import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
import User from './User';
import Account from './Account';
const custAccSchema = new Schema(
    {
        customer: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        account: {
            type: mongoose.Schema.ObjectId,
            ref: 'Account'
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        autoindex: true
    }
);

custAccSchema.set('toJSON', {
    getters: true,
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});


const CustAcc = mongoose.model('CustAcc', custAccSchema);
export default CustAcc;