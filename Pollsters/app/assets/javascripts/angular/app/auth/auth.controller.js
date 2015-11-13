(function(){
  'use strict';

  angular
  .module('app.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['AuthService', 'UserService'];

  function AuthController(AuthService, UserService) {
    var vm = this;

    function login() {
      // console.log($scope.user);
      return AuthService.attemptLogin(vm.user);

    }

    function createUser() {
      //will have to have rails check db and return error if username is already made
      // UserService.
    }
    vm.login = login;
  }
})();