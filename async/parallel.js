var EMPTY_FUNCTION = new Function();

var Promise = require('./util/promise.js');

/**
 * iterate the array in parallel
 * 
 * @param {[type]} targets [targets description]
 * @param {[type]} iterator [iterator description]
 * @return {[type]} [return description]
 */
function Parallel(targets, iterator) {

    var isCompleted = 0;
    var promise = new Promise();
    var keys = Object.keys(targets);
    var count = keys.length;

    var iteratorCallback = function(err) {

        if (err) {
            finish(err);
            isCompleted = 2;
            iteratorCallback = EMPTY_FUNCTION;
            return;
        }

        if (--count === 0) {
            finish();
            isCompleted = 1;
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
            iterator(key, iteratorCallback);
        });

    });


    return promise;

};

module.exports = Parallel;