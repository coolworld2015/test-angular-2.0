(function (app) {
    "use strict";

app.HeroDetail = ng.core
    .Component({
        selector: 'hero',
        template: '<b>Name: {{name}}</b>'
    })
    .Class({
        constructor: [ng.router.RouteParams, function (routeParams) {
            this.name = routeParams.get('name');
        }]
    });

})(window.app || (window.app = {}));
