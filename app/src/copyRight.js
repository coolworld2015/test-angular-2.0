(function (app) {
    "use strict";

    app.CopyRight = ng.core
        .Component({
            selector: 'copy-right',
            template: '<div>{{greeting}}</div>',
            providers: [app.AppNameService]
        })
        .Class({
            constructor: [app.AppNameService, function (service) {
                this.greeting = service.greeting();
            }]
        });

})(window.app || (window.app = {}));