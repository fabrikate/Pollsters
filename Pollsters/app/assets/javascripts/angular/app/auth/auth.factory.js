(function() {
  'use strict';

  angular.module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http'];

  function AuthService($http) {


    function attemptLogin(userInfo) {
      return $http.post('/api/login', userInfo)
        .success(loginSuccess)
        .error(loginError);
    }

    function logout() {
      return $http.delete('/api/logout').then(function(data) {
        return data;
      }, function(response) {
        return response;
      });
    }

    function loginSuccess(data) {
      return data;
    }

    function loginError(response) {
      return response;
    }

    return {
      currentUser: null,
      attemptLogin: attemptLogin,
      logout: logout,
      current: null
    };
  }
})();