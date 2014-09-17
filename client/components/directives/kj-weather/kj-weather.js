/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('kjWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(zip){
      return $http.jsonp('http://api.wunderground.com/api/8674e8df3b407733/conditions/q/'+ zip +'.json?callback=JSON_CALLBACK');
    }
    return {conditions:conditions};
  }])
  .directive('kjWeather', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/kj-weather/kj-weather.html';
    o.scope       = {zip:'@'};
    o.link        = function(scope, element, attrs){
                    };
    o.controller  = ['$scope', 'WeatherApi', function($scope, WeatherApi){
        WeatherApi.conditions($scope.zip).then(function(response){
          $scope.temperature = response.data.current_observation.temp_f;
          $scope.icon        = response.data.current_observation.icon_url;
        });
    }];

  return o;

  }]);
})();
