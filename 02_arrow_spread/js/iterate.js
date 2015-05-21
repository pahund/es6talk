function iterate(...items) {
    return function (callback) {
        return function (...prev) {
            items.forEach(function (item) {
                if (typeof callback === "function") {
                    callback(...prev.concat(item));
                }
            });
        };
    };
}

export default iterate;
