function loadJsonp(url, success, failure) {
    const script = document.createElement("script");

    failure = failure || (() => {
        logger.log("error loading data from " + url);
    });

    let timeoutHandler = window.setTimeout(() => {
        window.jsonpCallback = () => {};
        failure();
    }, 3000);

    window.jsonpCallback = (data) => {
        window.clearTimeout(timeoutHandler);
        success(data);
    };

    script.src = url + "?_jsonp=jsonpCallback";

    document.getElementsByTagName("head")[0].appendChild(script);
}

export default loadJsonp;
