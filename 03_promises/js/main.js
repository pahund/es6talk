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

    loadMakes()
            .then(handleMakesLoaded)
            .then(handleModelsLoaded)
            .then(initMakeChangeHandler)
            .catch(() => logger.log("OMG, it didn't work!"));
});

function handleMakesLoaded() {
    logger.log("makes loaded");
    $makeDropdown.prop("disabled", false);
    return loadModels();
}

function handleModelsLoaded() {
    logger.log("models loaded");
    $modelDropdown.prop("disabled", false);
}

function initMakeChangeHandler() {
    $makeDropdown.change(() => {
        logger.log("make changed: " + $makeDropdown.val());
        loadModels();
    });
}

function loadMakes() {
    return loadJsonp("//m.mobile.de/svc/r/makes/Car")
            .then(makeData => makeData.makes.forEach(
                    make => $makeDropdown.append("<option value=\"" + make.i + "\">" + make.n + "</option>")));
}

function loadModels() {
    const makeId = $makeDropdown.val();
    $modelDropdown.find("option").remove();
    return loadJsonp("//m.mobile.de/svc/r/models/"+ makeId)
            .then(modelData => modelData.models.forEach(
                    model => $modelDropdown.append("<option value=\"" + model.i + "\">" + model.n + "</option>")));
}


