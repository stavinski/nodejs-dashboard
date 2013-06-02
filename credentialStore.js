var credentials = require('./credentials');

exports.getCredentials = function(key, callback) {
    if (credentials[key]) {
        callback(null, credentials[key]);
    } else {
        callback(new Error('Could not locate credentials with key [' + key + ']'), null);
    }
};