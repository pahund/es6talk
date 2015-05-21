function nest(...functions) {
    functions.reduceRight((prev, curr) => curr(prev))();
}

export default nest;
