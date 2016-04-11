(function (app) {
    "use strict";

    app.AppNameService1 = ng.core
        .Class({
            constructor: function () {
                console.log('AppNameService1');
            },

            greeting: function () {
                return 'CoolWorld1';
            }
        });

})(window.app || (window.app = {}));
