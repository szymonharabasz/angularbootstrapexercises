angular.module('ContactManager',['ngRoute', 'ngSanitize', 'mgcrea.ngStrap', 'ngResource'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/',{
        controller: 'indexController',
        templateUrl: '/assets/partials/main.html'
    })
    .when('/add-contact', {
        controller: 'addController',
        templateUrl: '/assets/partials/add.html'
    })
    .when('/contact/:id', {
        controller: 'contactController',
        templateUrl: '/assets/partials/contact.html',
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
})
.controller('appController', function ($scope, $location) {
    $scope.startSearch = function() {
        $location.path("/");
    };
    $scope.pageClass = function (path) {
        return (path == $location.path()) ? 'active' : '';
    }
});