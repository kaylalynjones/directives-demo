/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('kjMovieModule', [])
  .factory('MovieApi', ['$http', function($http){

    function info(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q='+title+'&page_limit=1&page=1&apikey=e2v5txptuhrnj7g6mxxt3pc7&callback=JSON_CALLBACK');
    }
    return {info:info};
  }])
  .directive('kjMovie', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/kj-movie/kj-movie.html';
    o.scope       = {title:'@', remove:'&'};
    o.link        = function(scope, element, attrs){
                    };



    o.controller  = ['$scope', 'MovieApi', function($scope, MovieApi){

        MovieApi.info($scope.title).then(function(response){
          $scope.movie = response.data.movies[0];
          $scope.poster = response.data.movies[0].posters.profile.replace(/_tmb/, '_pos');
        });
    }];

  return o;

  }]);
})();
