import Logger from "./Logger";

const logger = new Logger("#console");

$("#foo").click(function () {
    logger.log("foo");
});
$("#bar").click(function () {
    logger.log("bar");
});

