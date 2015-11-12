(function(){
  'use strict';
  angular
  .module('app.core')
  .factory('PollFactory', PollFactory);

  PollFactory.$inject = ['$resource']
    function PollFactory($resource) {
      PollFactory = {}
      PollFactory.pollResource =  $resource('http://localhost:3000/api/polls/:id', {id: '@id'}, 
      { update: { method: 'PUT' } });

      PollFactory.userResource = $resource('http://localhost:3000/api/polls/:id', {id: '@id'});

      return PollFactory;
    });
  };

})();