(function (app) {
    "use strict";

    app.AppNameService = function () {
    };
    app.AppNameService.prototype.greeting = function () {
        return 'CoolWorld';
    };

    app.CopyRight = ng.core
        .Component({
            selector: 'copy-right',
            providers: [app.AppNameService],
            template: '<div>{{greeting}}</div>'
        })
        .Class({
            constructor: [app.AppNameService, function (service) {
                this.greeting = service.greeting();
            }]
        });

})(window.app || (window.app = {}));