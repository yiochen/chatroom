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
            //            scrollToBottom();
        };
        app.messageView = document.querySelector("paper-header-panel");
        //        scrollToBottom();

    }

    function scrollToBottom() {

        var children = app.messageView.children[0].children;
        children[children.length - 2].scrollIntoView();

    }
    //    if (app) {
    //        init();
    //    } else {

    app.addEventListener('dom-change', function (e) {
        init();
    });
    //    }
})(wrap(document));
