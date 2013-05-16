module.exports = function(target) {

    if (!target) {
        return null;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0, arg; arg = args[i]; i++) {
        if (arg && typeof arg === 'object') {

            for (var name in arg) {
                if (arg.hasOwnProperty(name)) {
                    target[name] = arg[name];
                }
            }

        }
    }


    return target;

};