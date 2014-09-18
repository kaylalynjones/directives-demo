/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('kjWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(query){
      return $http.jsonp('http://api.wunderground.com/api/8674e8df3b407733/conditions/q/'+ query +'.json?callback=JSON_CALLBACK');
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
        $scope.$on('position', function(event, pos){
          if($scope.zip){return;}
          var query = pos.coords.latitude + ',' + pos.coords.longitude;
          weather(query);
        });
        function weather(query){
          WeatherApi.conditions(query).then(function(response){
            $scope.temperature = response.data.current_observation.temp_f;
            $scope.icon        = response.data.current_observation.icon_url;
          });
        }
        if($scope.zip){weather($scope.zip);}
    }];

  return o;

  }]);
})();
