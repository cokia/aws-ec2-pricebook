define(['backbone'], function (Backbone){
    "use strict";
    var AWSRouter, router;

    /**
     * AWSRouter
     *
     * The router for the application. Instantiated in AppView.
     *
     */
    AWSRouter = Backbone.Router.extend({
        routes: {
            "instances(/)(:instance)": "instances",
            "": "home"
        },
        home: function () {
            this.navigate("instances", {"trigger": true});
        }
    });
    router = new AWSRouter();

    return router;
});
