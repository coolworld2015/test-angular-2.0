(function (app) {
    "use strict";

    app.Clients = ng.core
        .Component({
            selector: 'clients',
            providers: [ng.http.HTTP_PROVIDERS],
            template: '<table>' +
            '<tr *ngFor="#client of clients" (click)="onClick(hero)">' +
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
            constructor: [ng.router.Router, ng.http.Http, function (router, http) {
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
            }]
        });

})(window.app || (window.app = {}));
