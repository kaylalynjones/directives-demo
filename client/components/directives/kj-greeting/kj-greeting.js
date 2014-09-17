(function(){
  'use strict';

  angular.module('kjGreetingModule', [])
  .directive('kjGreeting', [function(){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/kj-greeting/kj-greeting.html';
    o.scope = {name:'@', age:'@'};


    return o;
  }]);

})();
