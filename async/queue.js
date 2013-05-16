var EMPTY_FUNCTION = new Function();
var Promise = require('./util/promise.js');

module.exports = function(queue, iterator) {

    var isCompleted = 0;
    var promise = new Promise();

    var iterate = function() {

        if (queue.length && !isCompleted) {
            iterator(queue.shift(), iterateCallback);   
        }
        else {
            isCompleted = 1;
            iterateCallback = iterate = EMPTY_FUNCTION;
            finish();
        }

    };

    var iterateCallback = function(err) {

        if (err) {
            finish(err);
            isCompleted = 2;
            iterateCallback = iterate = EMPTY_FUNCTION;
        }
        else {
            iterate();
        }

    };

    var finish = function(err) {
        process.nextTick(function() {
            promise.resolve(err);
        });
    };

    process.nextTick(iterate);
    
    return promise;

};