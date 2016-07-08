(function (app) {
    "use strict";

app.ClientDetail = ng.core
    .Component({
        selector: 'client',
        template: '<b>Name: {{name}}</b>'
    })
    .Class({
        constructor: [ng.router.RouteParams, function (routeParams) {
            this.name = routeParams.get('name');
        }]
    });

})(window.app || (window.app = {}));