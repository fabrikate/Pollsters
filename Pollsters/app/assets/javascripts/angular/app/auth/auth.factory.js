(function() {
  'use strict';

  angular.module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http'];

  function AuthService($http) {
    var AuthService = {};

    AuthService.currentUser = null;

    AuthService.attemptLogin = function(userInfo) {
      // console.log(userInfo);
      // return $http.post('/api/login', userInfo).then(function() {

      // });
    };

    AuthService.logout = function(userInfo) {
      return $http.post('/api/logout').then(function(data) {
        //also need to have logout showon navbar

      });
    }

    return AuthService;
  }
})();