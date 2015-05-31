function loadJsonp(url, success = () => {}, failure = () => { throw new Error("error loading data from " + url); }) {
    const script = document.createElement("script");

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
