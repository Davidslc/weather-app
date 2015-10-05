// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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
weatherApp.controller('homeController', ['$scope', '$routeProvider', function($scope, $routeProvider) {
    
}]);

weatherApp.controller('forcastController', ['$scope', '$routeProvider', function($scope, $routeProvider) {
    
}]);