/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('kjLocateModule', [])
  .factory('LocationService', ['$q', function($q){
    function locate(){ // this is a promise-------------------------------------
      var deferred = $q.defer(), //creates deferred obj
          options = {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0 //dont cache it
          };
      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);

      return deferred.promise;
    }
    return {locate:locate};
  }])
  .directive('kjLocate', ['LocationService', function(LocationService){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/kj-locate/kj-locate.html';
    o.scope       = {};
    o.link        = function(scope, element, attrs){
                    };
    o.controller  = ['$scope', function($scope){
      $scope.findMe = function(){
        LocationService.locate().then(success, error);
      };
      function success(pos){
        console.log(pos);
      }
      function error(err){
        console.log(err);
      }
    }];

  return o;

  }]);
})();
