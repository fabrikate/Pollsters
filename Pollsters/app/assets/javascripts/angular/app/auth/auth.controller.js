(function(){
  'use strict';

  angular
  .module('app.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['$scope', 'AuthService', 'UserService'];

  function AuthController($scope, AuthService) {
    // var vm = this;

    function login() {
      // console.log($scope.user);
      return AuthService.attemptLogin($scope.user);

    }

    function createUser() {
      //will have to have rails check db and return error if username is already made
      UserService.
    }
    $scope.login = login;
  }
})();