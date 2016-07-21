(function (app) {
    "use strict";

    app.AppNameService = ng.core
        .Class({
            constructor: function () {
                console.log('AppNameService');
            },

            greeting: function () {
                return 'CoolWorld';
            }
        });

})(window.app || (window.app = {}));
