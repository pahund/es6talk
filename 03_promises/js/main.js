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

    loadMakes(() => {
        logger.log("makes loaded");
        $makeDropdown.prop("disabled", false);
        loadModels(() => {
            logger.log("models loaded");
            $modelDropdown.prop("disabled", false);
        });
        $makeDropdown.change(() => {
            logger.log("make changed: " + $makeDropdown.val());
            loadModels();
        });
    });
});

function loadMakes(callback = (() => {})) {
    loadJsonp("//m.mobile.de/svc/r/makes/Car", makeData => {
        makeData.makes.forEach(
                make => $makeDropdown.append("<option value=\"" + make.i + "\">" + make.n + "</option>"));
        callback();
    });
}

function loadModels(callback = (() => {})) {
    const makeId = $makeDropdown.val();
    $modelDropdown.find("option").remove();
    loadJsonp("//m.mobile.de/svc/r/models/" + makeId,
            modelData => modelData.models.forEach(
                model => $modelDropdown.append("<option value=\"" + model.i + "\">" + model.n + "</option>")));
    callback();
}


