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

    loadJsonp("//m.mobile.de/svc/r/makes/Car", makeData => {
        logger.log("makes loaded");
        makeData.makes.forEach(
                make => $makeDropdown.append("<option value=\"" + make.i + "\">" + make.n + "</option>"));
        $makeDropdown.prop("disabled", false);

        loadJsonp("//m.mobile.de/svc/r/models/" + makeData.makes[0].i, modelData => {
            logger.log("models loaded");
            modelData.models.forEach(
                    model => $modelDropdown.append("<option value=\"" + model.i + "\">" + model.n + "</option>"));
            $modelDropdown.prop("disabled", false);
        });

        $makeDropdown.change(() => {
            const makeId = $makeDropdown.val();
            logger.log("make changed: " + makeId);
            $modelDropdown.find("option").remove();
            loadJsonp("//m.mobile.de/svc/r/models/" + makeId,
                    modelData => modelData.models.forEach(
                            model => $modelDropdown.append("<option value=\"" + model.i + "\">" + model.n + "</option>")));
        });
    });
});


