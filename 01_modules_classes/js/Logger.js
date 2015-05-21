const doLog = Symbol("logs a statement"),
    removeNew = Symbol("removes the new class"),
    scrollDown = Symbol("scrolls down"),
    getHtml = Symbol("creates HTML for a new line");

class Logger {
    constructor(selector) {
        this.$console = $(selector);
    }

    log(msg) {
        this.handle = this[doLog](msg);
    }

    [doLog](msg) {
        window.clearTimeout(this.handle);
        this[removeNew]();
        this.$console.append(this[getHtml](msg));
        return this[scrollDown]();
    }

    [removeNew]() {
        this.$console.find("p").last().removeClass("new");
    }

    [scrollDown]() {
        return window.setTimeout(() => this.$console.scrollTop(this.$console.prop("scrollHeight")), 100);
    }

    [getHtml](msg) {
        return "<p class=\"new\">" + msg + "</p>";
    }
}

export default Logger;

