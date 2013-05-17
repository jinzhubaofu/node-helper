var EMPTY_FUNCTION = new Function();

var Promise = require('../promise/promise.js');

/**
 * iterate the array in parallel
 * 
 * @param {[type]} targets [targets description]
 * @param {[type]} iterator [iterator description]
 * @return {[type]} [return description]
 */
function Parallel(targets, iterator) {

    var promise = new Promise();
    var keys = Object.keys(targets);
    var count = keys.length;
    var errors = [];

    var iteratorCallback = function(err) {

        if (err) {
            errors.push(err);
        }

        if (--count === 0) {
            finish(errors.length ? errors : null);
            iteratorCallback = EMPTY_FUNCTION;
        }

    };

    var finish = function(err) {
        process.nextTick(function() {
            promise.resolve(err);
        });
    };

    keys.forEach(function(key) {

        process.nextTick(function() {
            iterator(key, targets[key], iteratorCallback);
        });

    });


    return promise;

};

module.exports = Parallel;