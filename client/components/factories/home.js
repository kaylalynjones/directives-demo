(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Home', ['$http', function($http){
    function save(title){
      return $http.post('/movies', {title:title});
    }
    function del(title){
      return $http.post('/movies/del', {title:title});
    }

    return {save:save, del:del};
  }]);
})();

