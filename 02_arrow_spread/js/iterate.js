function iterate(...items) {
    return function (callback) {
        return function (...prev) {
            items.forEach(function (item) {
                callback(...prev.concat(item));
            });
        };
    };
}

export default iterate;
