'use strict';
module.exports = Object.freeze({
    E_INVALID_AUTH_TOKEN: {
        code: 401,
        name: 'E_INVALID_AUTH_TOKEN',
        message: 'Unauthorized User'
    },
    E_INVALID_CSRF: {
        code: 401,
        name: 'E_INVALID_CSRF',
        message: 'Invalid CSRF token'
    },
    E_UNAUTHORISED: {
        code: 401,
        name: 'E_UNAUTHORISED',
        message: 'You are unauthorized to perform this task.'
    },
    E_USER_NOT_FOUND: {
        code: 404,
        name: 'E_USER_NOT_FOUND',
        message: 'User Not Exist'
    },
    E_CUSTOMER_NOT_FOUND: {
        code: 404,
        name: 'E_CUSTOMER_NOT_FOUND',
        message: 'Customer Not Exist'
    },
    E_INVALID_PASSWORD: {
        code: 406,
        name: 'E_INVALID_PASSWORD',
        message: 'Invalid email or password'
    },
    E_INVALID_EMAIL: {
        code: 406,
        name: 'E_INVALID_EMAIL',
        message: 'Email provided is invalid'
    },
    E_DUPLICATE_USER: {
        code: 409,
        name: 'E_DUPLICATE_USER',
        message: 'Email already exist please Login'
    },
    E_DUPLICATE_CUSTOMER: {
        code: 409,
        name: 'E_DUPLICATE_CUSTOMER',
        message: 'customer with this email already exist'
    },
    E_USER_ACCOUNT_DEACTIVATED: {
        code: 410,
        name: 'E_USER_ACCOUNT_DEACTIVATED',
        message: 'User account is deactivated please Signup again'
    },
    E_AUTH_TOKEN_EXPIRED: {
        code: 410,
        name: 'E_AUTH_TOKEN_EXPIRED',
        message: 'Authorizarion token expired please Re-login'
    },
    E_INTERNAL_SERVER_ERROR: {
        code: 500,
        name: 'E_INTERNAL_SERVER_ERROR',
        message: 'Internal server error'
    }
});