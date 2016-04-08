(function (app) {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.main, [ng.router.ROUTER_PROVIDERS]);
    });

})(window.app || (window.app = {}));