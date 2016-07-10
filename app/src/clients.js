(function (app) {
    "use strict";

    app.Clients = ng.core
        .Component({
            selector: 'clients',
            providers: [ng.http.HTTP_PROVIDERS],
            template: '<table>' +
            '<tr *ngFor="#client of clients" (click)="onClick(client)">' +
            '<td>{{client.id}}</td>' +
            '<td>{{client.name}}</td>' +
            '</tr>' +
            '</table>' +
            '<br>' +
            '<div *ngIf="show">' +
            'Loading ...' +
            '</div>'
        })
        .Class({
            constructor: [ng.http.Http, ng.router.Router, function (http, router) {
                var that = this;
                this.show = true;
                http.get('http://ui-warehouse.herokuapp.com/api/clients/get')
                    .map(function (res) {
                        return res.json();
                    })
                    .subscribe(function (clients) {
                        that.clients = clients.slice(0, 6);
                        that.show = false;
                    })
					
                this.onClick = function (client) {
                    console.log(client);
                    router.navigate(['ClientDetails', {
							id: client.id,
							name: client.name,
							address: client.address,
							phone: client.phone,
							cv: client.cv,
							description: client.description
						}]);
                };
            }]
        });

})(window.app || (window.app = {}));
