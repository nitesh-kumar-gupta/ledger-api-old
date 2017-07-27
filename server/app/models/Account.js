import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const accountSchema = new Schema(
    {
        credit: {
            type: Number,
            required: true,
            trim: true,
            default: 0
        },
        debit: {
            type: Number,
            required: true,
            trim: true,
            default: 0
        },
        date: {
            type: Date,
            required: true,
            default: Date.now
        },
        remark: {
            type: String,
            trim: true,
            default: null
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

accountSchema.set('toJSON', {
    getters: true,
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});


const Account = mongoose.model('Account', accountSchema);
export default Account;