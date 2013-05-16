var helper = {};

var features = {
    fs: ['mkdir'],
    object: ['extend'],
    async: ['parallel', 'queue', 'serial'],
    promise: ['promise']
};


Object.keys(features).forEach(function(set) {

    helper[set] = {};

    features[set].forEach(function(feature) {

        helper[set][feature] = require('./features/' + set + '/' + feature + '.js');

    });


});;

module.exports = helper;