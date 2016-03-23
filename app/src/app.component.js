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
            providers: [HeroService],
            template: '<table>' +
            '<tr *ngFor="#hero of heroes" (click)="onClick(hero)">' +
            '<td>{{hero.id}}</td>' +
            '<td>{{hero.name}}</td>' +
            '</tr>' +
            '</table>'
        })
        .Class({
            constructor: [HeroService, ng.router.Router, function (service, router) {
                this.heroes = service.getHeroes();
                this.onClick = function (hero) {
                    console.log(hero.name);
                    router.navigate(['HeroDetail', {name: hero.name}]);
                }
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

    var app = ng.core
        .Component({
            selector: 'my-app',
            directives: [MyName, Heroes, ng.router.ROUTER_DIRECTIVES, ng.router.RouterLink, ng.router.RouterOutlet],
            template: '<router-outlet></router-outlet>' +
            '<div (click)="onClick(hero)">' +
            '<h1>Hello Angular 2 !!!</h1>' +
            '</div>' +
            '<heroes></heroes><br>' +
            '<ul>' +
            '<li><a [routerLink]="[\'./Index\']">Index Page</a></li>' +
            '<li><a [routerLink]="[\'./Home\']">Home Page</a></li>' +
            '</ul>' +
            '<my-name></my-name>'
        })
        .Class({
            constructor: [ng.router.Router, function (router) {
                router.config([
                    {path: '/', component: Blank, name: 'Blank'},
                    {path: '/index', component: Index, name: 'Index'},
                    {path: '/home', component: Home, name: 'Home'},
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