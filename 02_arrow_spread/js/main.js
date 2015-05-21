import Logger from "./Logger";
import iterate from "./iterate";
import nest from "./nest";

const logger = new Logger("#console"),

    roman = iterate("I", "II", "III"),
    arabic = iterate(1, 2, 3),
    alphabetical = iterate("a", "b", "c");

function logIt(rom, arab, alpha) {
    logger.log(rom + ". " + arab + ". " + alpha + ")");
}

nest(roman, arabic, alphabetical, logIt);
