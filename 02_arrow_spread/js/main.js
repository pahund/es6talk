import Logger from "./Logger";

const logger = new Logger("#console"),

    roman = ["I", "II", "III"],
    arabic = [1, 2, 3],
    alphabetical = ["a", "b", "c"];

function logIt(rom, arab, alpha) {
    logger.log(rom + ". " + arab + ". " + alpha + ")");
}

for (let romanI = 0; romanI < roman.length; romanI++) {
    for (let arabicI = 0; arabicI < arabic.length; arabicI++) {
        for (let alphabeticalI = 0; alphabeticalI < alphabetical.length; alphabeticalI++) {
            logIt(roman[romanI], alphabetical[alphabeticalI], arabic[arabicI]);
        }
    }
}

