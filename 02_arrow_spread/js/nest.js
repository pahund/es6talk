function nest() {
    var functions = Array.prototype.slice.call(arguments);
    functions.reduceRight(function (prev, curr) {
        return curr(prev);
    })();
}

export default nest;
