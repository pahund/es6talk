require([
    "./Logger"
], function (Logger) {
    var logger = new Logger("#console");

    $("#foo").click(function () {
        logger.log("foo");
    });
    $("#bar").click(function () {
        logger.log("bar");
    });
})

