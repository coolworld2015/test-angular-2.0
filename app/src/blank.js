(function (app) {
    "use strict";

    app.Blank = ng.core
        .Component({
            selector: 'blank',
            template: ''
        })
        .Class({
            constructor: function () {
                console.log('Blank');
            }
        });

})(window.app || (window.app = {}));
