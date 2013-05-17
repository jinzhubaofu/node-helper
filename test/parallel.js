var parallel = require('../features/async/parallel.js');

parallel({
    name: 1,
    age: 2,
    type: 3
}, function(key, value, callback) {

    console.log('handling %s', key);
    var delay = Math.round(Math.random() * 5000)

    setTimeout(function() {

        console.log('%s finished in %dms', key, delay);

        if (value < 3) {
            callback(key + ' is bad');
        }
        else {
            callback();
        }

    }, delay);

}).then(function(err) {

    if (err) {
        console.log('get %d errors:\n%s', err.length, JSON.stringify(err));
    }
    else {
        console.log('haha');
    }

});