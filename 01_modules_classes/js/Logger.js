class Logger {
    constructor(selector) {
        this.$console = $(selector);
    }

    log(msg) {
        this.handle = this._doLog(msg);
    }

    _doLog(msg) {
        window.clearTimeout(this.handle);
        this._removeNew();
        this.$console.append(this._getHtml(msg));
        return this._scrollDown();
    }

    _removeNew() {
        this.$console.find("p").last().removeClass("new");
    }

    _scrollDown() {
        var _this = this;
        return window.setTimeout(function () {
            _this.$console.scrollTop(_this.$console.prop("scrollHeight"));
        }, 100);
    }

    _getHtml(msg) {
        return "<p class=\"new\">" + msg + "</p>";
    }
}

export default Logger;

