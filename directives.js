// Directives
weatherApp.directive('dateTemp', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/datetemp.htm',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});