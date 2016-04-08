(function (app) {
    "use strict";

    app.AppNameService = function () {
    };
    app.AppNameService.prototype.greeting = function () {
        return 'CoolWorld1';
    };

})(window.app || (window.app = {}));
