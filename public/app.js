(function () {
    'use strict';
    angular.module('manager', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: './home.html',
                    controller: 'homeController'
                })
                .otherwise({ redirectTo: '/home' });
        });
})();