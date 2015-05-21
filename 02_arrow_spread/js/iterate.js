function iterate() {
    var items = Array.prototype.slice.call(arguments);
    return function (callback) {
        return function () {
            var prev = Array.prototype.slice.call(arguments);
            items.forEach(function (item) {
                if (typeof callback === "function") {
                    callback.apply(null, prev.concat(item));
                }
            });
        };
    };
}

export default iterate;
