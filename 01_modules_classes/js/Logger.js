/**
 * Logger.js
 *
 * Logs stuff to my beautiful console box.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 20 May 2015
 */
define(function () {
    function Logger(selector) {
        this.$console = $(selector);
    }

    Logger.prototype.log = function (msg) {
        this.handle = this._doLog(msg);
    };

    Logger.prototype._doLog = function (msg) {
        window.clearTimeout(this.handle);
        this._removeNew();
        this.$console.append(this._getHtml(msg));
        return this._scrollDown();
    };

    Logger.prototype._removeNew = function () {
        this.$console.find("p").last().removeClass("new");
    };

    Logger.prototype._scrollDown = function () {
        var _this = this;
        return window.setTimeout(function () {
            _this.$console.scrollTop(_this.$console.prop("scrollHeight"));
        }, 100);
    };

    Logger.prototype._getHtml = function (msg) {
        return "<p class=\"new\">" + msg + "</p>";
    };

    return Logger;
});

