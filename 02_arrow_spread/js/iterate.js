function iterate(...items) {
    return callback => (...prev) => items.forEach(item => callback(...prev.concat(item)));
}

export default iterate;
