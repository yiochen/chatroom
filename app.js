var app;
(function (document) {
    'use strict';
    app = document.querySelector('#app');

    function init() {
        app.fb = new Firebase('chatforintern.firebaseIO.com');
        app.send = function () {
            app.fb.push({
                name: app.name,
                message: app.message
            });
            app.message = "";
        };

    }
    if (app) {
        init();
    } else {

        app.addEventListener('dom-change', function (e) {
            init();
        });
    }
})(wrap(document));
