function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function (x) {
        return Object.prototype.hasOwnProperty.call(x, "quack");
    }).length;
}

module.exports = duckCount;