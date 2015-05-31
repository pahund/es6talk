import Logger from "./Logger";
import loadJsonp from "./loadJsonp";

const logger = new Logger("#console"),
    $startButton = $("#start"),
    $makeDropdown = $("#make"),
    $modelDropdown = $("#model");

$startButton.prop("disabled", false);
$makeDropdown.prop("disabled", true);
$modelDropdown.prop("disabled", true);

$startButton.click(() => {
    logger.log("started! weeee!")
    $startButton.prop("disabled", true);

    loadMakes().then(() => {
        logger.log("makes loaded");
        $makeDropdown.prop("disabled", false);
        return loadModels();
    }).then(() => {
        logger.log("models loaded");
        $modelDropdown.prop("disabled", false);
    }).then(() => {
        $makeDropdown.change(() => {
            logger.log("make changed: " + $makeDropdown.val());
            loadModels();
        });
    });
});

function loadMakes() {
    return new Promise(resolve =>
        loadJsonp("//m.mobile.de/svc/r/makes/Car", makeData => {
            makeData.makes.forEach(
                    make => $makeDropdown.append("<option value=\"" + make.i + "\">" + make.n + "</option>"));
            resolve();
    }));
}

function loadModels() {
    const makeId = $makeDropdown.val();
    $modelDropdown.find("option").remove();
    return new Promise(resolve =>
        loadJsonp("//m.mobile.de/svc/r/models/" + makeId, modelData => {
            modelData.models.forEach(
                    model => $modelDropdown.append("<option value=\"" + model.i + "\">" + model.n + "</option>"));
            resolve();
    }));
}


