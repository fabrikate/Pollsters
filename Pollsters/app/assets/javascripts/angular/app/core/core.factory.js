 (function(){
  'use strict';
  angular
  .module('app.core')
  .factory('PollFactory', PollFactory);

  PollFactory.$inject = ['$resource']

  function PollFactory($resource) {
   return $resource('http://localhost:3000/api/polls/:poll', {poll: '@poll'}, {
      update: {
        method: 'PUT'
      }
    });
  };
})();
