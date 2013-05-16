var extend = require('../index.js').object.extend;


var a = {
    name: 1,
    age: 2,
    dada: 'daidai'
};


var b = {
    name: 2,
    age: 3,
    haha: 'haha'
};

console.log(extend(a, b));