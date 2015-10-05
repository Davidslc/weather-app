// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/forcast', {
        templateUrl: 'pages/forcast.htm',
        controller: 'forcastController'
    })
});

// Controllers
weatherApp.controller('homeController', ['$scope', function($scope, $routeProvider) {
    
}]);

weatherApp.controller('forcastController', ['$scope', function($scope, $routeProvider) {
    
}]);