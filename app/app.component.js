(function (app) {

    var NameService = function () {
    };

    NameService.prototype.greeting = function () {
        return 'Edward Tkachuk';
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

    var Footer = ng.core
        .Component({
            selector: 'footer',
            template: '<br>'
        })
        .Class({
            constructor: function () {
            }
        });

    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Hello Angular 2!</h1>' +
            '<footer></footer>' +
            '<my-name></my-name>',
            directives: [Footer, MyName]
        })
            .Class({
                constructor: function () {
                }
            });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    });

})(window.app || (window.app = {}));