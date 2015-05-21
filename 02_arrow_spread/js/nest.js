function nest(...functions) {
    functions.reduceRight(function (prev, curr) {
        return curr(prev);
    })();
}

export default nest;
