(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', function($scope){

    $scope.people = [{name:'Bob', age:25}];
    $scope.symbols = ['AAPL', 'GOOG', 'AMZN', 'MSFT'];
    $scope.movies = ['Lars and the Real Girl', 'Clerks'];
  }]);
})();

