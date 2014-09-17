/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('kjMovieModule', [])
  .factory('MovieApi', ['$http', function($http){



    function movies(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q='+title+'&page_limit=1&page=1&apikey=e2v5txptuhrnj7g6mxxt.json&callback=JSON_CALLBACK');
    }
    return {movies:movies};
  }])
  .directive('kjMovie', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/kj-movie/kj-movie.html';
    o.scope       = {title:'@'};
    o.link        = function(scope, element, attrs){
                    };
    o.controller  = ['$scope', 'MovieApi', function($scope, MovieApi){
        MovieApi.movies($scope.name).then(function(response){
          debugger;
          $scope.title = response.data.movies.title;
          $scope.rating = response.data.movies.mpaa_rating;
          $scope.critics = response.data.movies.critics_rating;
          $scope.poster = response.data.movies.original;
        });
    }];

  return o;

  }]);
})();
