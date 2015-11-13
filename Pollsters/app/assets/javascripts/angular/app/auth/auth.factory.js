(function() {
  'use strict';

  angular.module('app.auth')
    .factory('AuthFactory', AuthFactory);

  AuthFactory.$inject = ['$resource'];

  function AuthFactory($resource) {

    return {}
  }
})();