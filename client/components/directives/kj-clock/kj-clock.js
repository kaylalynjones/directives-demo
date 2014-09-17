(function(){
  'use strict';

  angular.module('kjClockModule', [])
  .directive('kjClock', ['$interval', function($interval){
  var o = {};

  o.restrict    = 'A';
  o.templateUrl = '/components/directives/kj-clock/kj-clock.html';
  o.scope       = {frequency:'@'};
  o.link        = function(scope, element, attrs){
                    function updateTime(){
                      scope.date = new Date();
                    }
                    var id = $interval(updateTime, scope.frequency * 1);
                    element.on('$destroy', function(){
                      $interval.cancel(id);
                    });
                  };

  return o;
  }]);
})();
