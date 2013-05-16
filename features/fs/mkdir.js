var Path = require('path');
var Fs = require('fs');

function mkdir(path) {

    var root = '';

    Path.dirname(path).split(Path.sep).forEach(function(dir){

        // hack the absolute path
        root += dir || Path.sep;

        Fs.existsSync(root) || Fs.mkdirSync(root);

        // hack the absolute path
        root += dir ? Path.sep : '';

    });

};

module.exports = mkdir;