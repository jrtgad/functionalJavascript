var slice = Array.prototype.slice;

function logger(namespace) {
    var arg = slice.call(arguments);
    arg.unshift(console.log);

    return function () {
        return console.log.apply(null, arg);
    };
}

module.exports = logger;