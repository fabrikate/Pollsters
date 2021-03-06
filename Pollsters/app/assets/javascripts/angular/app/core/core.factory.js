 (function(){
  'use strict';
  angular
  .module('app.core')
  .factory('PollFactory', PollFactory);


  PollFactory.$inject = ['$resource'];

  function PollFactory($resource) {
   return $resource('/api/polls/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  };

})();

