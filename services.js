// Services
weatherApp.service('cityService', function() {

    this.city = "Salt Lake City, UT";

});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        var weatherAPI =  $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
    
        return weatherAPI.get({ q: city, APPID: 'c72dcb02b7526b67a023c13f2257c939', cnt: days });
    };
}]);