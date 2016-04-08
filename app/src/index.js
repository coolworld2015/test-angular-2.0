(function (app) {
    "use strict";

    app.Index = ng.core
        .Component({
            selector: 'index',
            template: '<b>Index Component</b>'
        })
        .Class({
            constructor: function () {
                console.log('Index');
            }
        });

})(window.app || (window.app = {}));
