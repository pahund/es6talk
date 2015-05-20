const getHTML = Symbol("private method for creating HTML code of a log line"),
    scrollDown = Symbol("private method for scrolling the console to the line that was added last"),
    removeNew = Symbol("private method for removing class \"new\" from the last line"),
    doLog = Symbol("private method to do the actual logging to the console");

class Console {
    constructor() {
        this.$console = $("#console");
    }

    log(msg, color) {
        this.handle = Console[doLog](this.handle, this.$console, msg, color);
    }

    static createLogFunction(color) {
        return (() => {
            const $console = $("#console");
            let handle;
            return (...messages) => handle = Console[doLog](handle, $console, messages.join(" "), color);
        })();
    }

    static [doLog](handle, $console, msg, color) {
        window.clearTimeout(handle);
        Console[removeNew]($console);
        $console.append(Console[getHTML](msg, color));
        return Console[scrollDown]($console);
    }

    static [getHTML](msg, color) {
        return "<p class=\"new" + (color ? " " + color : "") + "\">" + msg + "</p>";
    }

    static [scrollDown]($console) {
        return window.setTimeout(() => {
            $console.scrollTop($console.prop("scrollHeight"));
        }, 100);
    }

    static [removeNew]($console) {
        $console.find("p").last().removeClass("new");
    }
}

export default Console;
