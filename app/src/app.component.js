(function () {
    "use strict";

    var NameService = function () {
    };
    NameService.prototype.greeting = function () {
        return 'Eduard Tkachuk';
    };

    var HeroService = function () {
        this.heroes = [
            {"id": 11, "name": "Mr. Nice"},
            {"id": 12, "name": "Narco"},
            {"id": 13, "name": "Bombasto"},
            {"id": 14, "name": "Celeritas"},
            {"id": 15, "name": "Magneta"},
            {"id": 16, "name": "RubberMan"},
            {"id": 17, "name": "Dynama"},
            {"id": 18, "name": "Dr IQ"},
            {"id": 19, "name": "Magma"},
            {"id": 20, "name": "Tornado"}
        ];
    };
    HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };

    var MyName = ng.core
        .Component({
            selector: 'my-name',
            providers: [NameService],
            template: '<div>{{greeting}}</div>'
        })
        .Class({
            constructor: [NameService, function (service) {
                this.greeting = service.greeting();
            }]
        });

    var Heroes = ng.core
        .Component({
            selector: 'heroes',
            providers: [HeroService, ng.http.HTTP_PROVIDERS],
            template: '<table>' +
            '<tr *ngFor="#hero of heroes" (click)="onClick(hero)">' +
            '<td>{{hero.id}}</td>' +
            '<td>{{hero.name}}</td>' +
            '</tr>' +
            '</table>' +
            '{{clients}} '
        })
        .Class({
            constructor: [HeroService, ng.router.Router, ng.http.Http, function (service, router, http) {
                this.heroes = service.getHeroes();

                this.onClick = function (hero) {
                    console.log(hero.name);
                    router.navigate(['HeroDetail', {name: hero.name}]);
                };
            }]
        });

    var Blank = ng.core
        .Component({
            selector: 'blank',
            template: ''
        })
        .Class({
            constructor: function () {
            }
        });

    var Index = ng.core
        .Component({
            selector: 'index',
            template: '<b>Index Component</b>'
        })
        .Class({
            constructor: function () {
            }
        });

    var Home = ng.core
        .Component({
            selector: 'home',
            template: '<b>Home Component</b>'
        })
        .Class({
            constructor: function () {
            }
        });

    var HeroDetail = ng.core
        .Component({
            selector: 'hero',
            template: '<b>Name: {{name}}</b>'
        })
        .Class({
            constructor: [ng.router.RouteParams, function (routeParams) {
                this.name = routeParams.get('name');
            }]
        });

    var Clients = ng.core
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

    var app = ng.core
        .Component({
            selector: 'my-app',
            directives: [MyName, Heroes, ng.router.ROUTER_DIRECTIVES, ng.router.RouterLink, ng.router.RouterOutlet],
            template: '' +
            '<div (click)="onClick(hero)">' +
            '<h1>Hello Angular 2 !!!</h1>' +
            '</div>' +
            '<ul>' +
            '<li><a [routerLink]="[\'./Index\']">Index Page</a></li>' +
            '<li><a [routerLink]="[\'./Home\']">Home Page</a></li>' +
            '<li><a [routerLink]="[\'./Clients\']">Clients</a></li>' +
            '<li><a [routerLink]="[\'./Heroes\']">Heroes</a></li>' +
            '</ul>' +
            //'<my-name></my-name>' +
            '<router-outlet></router-outlet>'
        })
        .Class({
            constructor: [ng.router.Router, function (router) {
                router.config([
                    {path: '/', component: Blank, name: 'Blank'},
                    {path: '/index', component: Index, name: 'Index'},
                    {path: '/home', component: Home, name: 'Home'},
                    {path: '/clients', component: Clients, name: 'Clients'},
                    {path: '/heroes', component: Heroes, name: 'Heroes'},
                    {path: '/hero/', component: HeroDetail, name: 'HeroDetail'}
                ]);
                this.onClick = function () {
                    router.navigate(['Blank']);
                }
            }]
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app, [ng.router.ROUTER_PROVIDERS]);
    });
})();