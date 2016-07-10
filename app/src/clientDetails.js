(function (app) {
    "use strict";

app.ClientDetails = ng.core
    .Component({
        selector: 'clientDetails',
        template: '<hr><b>id: {{id}}</b><br>' +
				  '<b>name: {{name}}</b><br>' +
				  '<b>address: {{address}}</b><br>' +
				  '<b>phone: {{phone}}</b><br>' +
				  '<b>cv: {{cv}}</b><br>' +
				  '<b>description: {{description}}</b><br><hr>'
    })
    .Class({
        constructor: [ng.router.RouteParams, function (routeParams) {
            this.id = routeParams.get('id');
            this.name = routeParams.get('name');
            this.address = routeParams.get('address');
            this.phone = routeParams.get('phone');
            this.cv = routeParams.get('cv');
            this.description = routeParams.get('description');
        }]
    });

})(window.app || (window.app = {}));