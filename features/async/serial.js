var Queue = require('./queue.js');

/**
 * iterate the array in series;
 * 
 * @param {Array} arr data array that will be iterated
 * @param {Function} iterator this function will execute several times which
 * equals to the length to arr and meanwhile will be passed two parameters:
 * 1: arr[i] every element in array in order
 * 2: callback a common callback for iterator. This function accepts a 
 * parameter 'err'. If err is not-null, the elements after [i] will not be 
 * iterated.
 * 
 * @param {Function} callback a function that will be executed if any iterator
 * callback passed not-null err or all the elements are already executed
 * executed;
 * 
 * @comment indeed we use recursion to do the work. Yes, much of the work is 
 * done by recursion.
 * 
 */
function Serial(list, iterator) {

    var targets = Array.prototype.slice.call(list);
    
    return Queue(targets, iterator);
	
};


module.exports = Serial;