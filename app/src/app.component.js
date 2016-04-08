(function (app) {
    "use strict";

    app.AppNameService = function () {
    };
    app.AppNameService.prototype.greeting = function () {
        return 'CoolWorld';
    };

    app.HeroService = function () {
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
    app.HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };

    app.MyName = ng.core
        .Component({
            selector: 'my-name',
            providers: [app.AppNameService],
            template: '<div>{{greeting}}</div>'
        })
        .Class({
            constructor: [app.AppNameService, function (service) {
                this.greeting = service.greeting();
            }]
        });

    app.Heroes = ng.core
        .Component({
            selector: 'heroes',
            providers: [app.HeroService, ng.http.HTTP_PROVIDERS],
            template: '<table>' +
            '<tr *ngFor="#hero of heroes" (click)="onClick(hero)">' +
            '<td>{{hero.id}}</td>' +
            '<td>{{hero.name}}</td>' +
            '</tr>' +
            '</table>' +
            '{{clients}} '
        })
        .Class({
            constructor: [app.HeroService, ng.router.Router, ng.http.Http, function (service, router, http) {
                this.heroes = service.getHeroes();

                this.onClick = function (hero) {
                    console.log(hero.name);
                    router.navigate(['HeroDetail', {name: hero.name}]);
                };
            }]
        });

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

    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            directives: [app.MyName, app.Heroes, ng.router.ROUTER_DIRECTIVES, ng.router.RouterLink, ng.router.RouterOutlet],
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
            '<my-name></my-name>' +
            '<router-outlet></router-outlet>'
        })
        .Class({
            constructor: [ng.router.Router, function (router) {
                router.config([
                    {path: '/', component: app.Blank, name: 'Blank'},
                    {path: '/index', component: app.Index, name: 'Index'},
                    {path: '/home', component: app.Home, name: 'Home'},
                    {path: '/clients', component: app.Clients, name: 'Clients'},
                    {path: '/heroes', component: app.Heroes, name: 'Heroes'},
                    {path: '/hero/', component: app.HeroDetail, name: 'HeroDetail'}
                ]);
                this.onClick = function () {
                    router.navigate(['Blank']);
                }
            }]
        });

    //document.addEventListener('DOMContentLoaded', function () {
    //    ng.platform.browser.bootstrap(app, [ng.router.ROUTER_PROVIDERS]);
    //});

})(window.app || (window.app = {}));