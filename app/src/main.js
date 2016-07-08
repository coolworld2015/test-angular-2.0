(function (app) {
    "use strict";

    //http://plnkr.co/edit/i1XSxi?p=preview

    app.main = ng.core
        .Component({
            selector: 'my-app',
            directives: [app.CopyRight, app.Heroes, ng.router.ROUTER_DIRECTIVES, ng.router.RouterLink, ng.router.RouterOutlet],
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
            '<copy-right></copy-right>' +
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
                    {path: '/hero/', component: app.HeroDetail, name: 'HeroDetail'},
                    {path: '/client/', component: app.ClientDetail, name: 'ClientDetail'}
                ]);
                this.onClick = function () {
                    router.navigate(['Blank']);
                }
            }]
        });

})(window.app || (window.app = {}));