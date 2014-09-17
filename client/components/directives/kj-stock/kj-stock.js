(function(){
  'use strict';

  angular.module('kjStockModule', [])
  .factory('StockApi', ['$http', function($http){
    function quote(symbol){
      return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+ symbol +'.json?callback=JSON_CALLBACK');
    }
    return {quote:quote};
  }])
  .directive('kjStock', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/kj-stock/kj-stock.html';
    o.scope       = {symbol:'@'};
    o.link        = function(scope, element, attrs){
                      element.on('$destroy', function(){
                       $interval.cancel(scope.id);
                      });
                    };
    o.controller  = ['$scope', 'StockApi', function($scope, StockApi){
      function getQuote(){
        StockApi.quote($scope.symbol).then(function(response){
          $scope.quote = response.data.LastPrice;
        });
      }

      $interval(getQuote, 40000);
      getQuote();
    }];

  return o;
  }]);
})();
