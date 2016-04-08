(function (app) {
    "use strict";

    app.Home = ng.core
        .Component({
            selector: 'home',
            template: '<b>Home Component</b>'
        })
        .Class({
            constructor: function () {
                console.log('Home');
            }
        });

})(window.app || (window.app = {}));
