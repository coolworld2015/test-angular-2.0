(function (app) {
    "use strict";

    app.HeroService = ng.core
        .Class({
            constructor: function () {
                console.log('HeroService');
            },

            getHeroes: function () {
                return app.HEROES;
            }
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
            '</table>'
        })
        .Class({
            constructor: [app.HeroService, ng.router.Router, function (service, router) {
                this.heroes = service.getHeroes();

                this.onClick = function (hero) {
                    console.log(hero.name);
                    router.navigate(['HeroDetail', {name: hero.name}]);
                };
            }]
        });

})(window.app || (window.app = {}));
