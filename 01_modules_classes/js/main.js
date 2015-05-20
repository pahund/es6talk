/**
 * main.js
 *
 * Example 1: Modules and Classes
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 20 May 2015
 */
require([
    "./Logger"
], function (Logger) {
    var logger = new Logger("#console");
    logger.log("Hi freaks!");
})

