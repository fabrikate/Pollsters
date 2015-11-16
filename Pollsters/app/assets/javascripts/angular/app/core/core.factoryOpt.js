(function() {
  'use strict'
  angular
  .module('app.core')
  .factory('OptionFactory', OptionFactory);

  OptionFactory.$inject = ['$resource'];

  function OptionFactory($resource) {
     return $resource('http://localhost:3000/api/polls/1/options/:id', {id: '@id'}, {
        'update': { method: 'PUT' }
      });
    };
})();