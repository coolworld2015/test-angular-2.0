(function (app) {
    "use strict";

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

})(window.app || (window.app = {}));
