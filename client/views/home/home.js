(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){

    $scope.people = [{name:'Bob', age:25}];
    $scope.symbols = ['AAPL', 'GOOG', 'AMZN', 'MSFT'];
    $scope.titles = ['Lars and the Real Girl'];

    $scope.addMovie = function(){
      var title = $scope.title;
      $scope.titles.push($scope.title);
      Home.save(title).then(function(response){
      $scope.title = '';
      });
    };

    //$scope.delMovie = function(index){
      //$scope.titles.splice(index, 1);
      //var title = $scope.titles.slice(index, 1);
      //Home.del(title).then(function(response){});
    //};

  }]);
})();

