function Promise() {
    this.listeners = [];
};

Promise.prototype.resolve = function(err, data) {
    for (var i = 0, listener; listener = this.listeners[i]; i++) {
        listener(err, data);
    }
};

Promise.prototype.then = function(callback) {
    this.listeners.push(callback);
};

module.exports = Promise;