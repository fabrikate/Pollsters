(function(){
  'use strict';

  angular.module('app.users')
    .factory('UserService', UserService);

  UserService.$inject = ['$resource'];

  function UserService($resource) {
    return $resource('http://pollstersco.herokuapp.com/api/users/:id', {id: '@id'},
      { update: {method: 'PUT'} });
  }

})();
