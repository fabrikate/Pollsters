(function(){
  'use strict';

  angular
  .module('app.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['AuthService', 'UserService'];

  function AuthController(AuthService, UserService) {
    var auth = this;

    function login() {
      // console.log(auth.user);
      return AuthService.attemptLogin(auth.user).success(function(data) {
        console.log(data);

      }).error(function(error) {
        console.log(error);
      });

    }

    function createUser() {
      // console.log(auth.newUser);
      auth.currentUser = UserService.save(auth.newUser, function(data) {
        console.log(data);
      }, function(error) {
        console.log(error);
      });
      // console.log(newUser);
    }

    // auth.currentUser = AuthService.currentUser;

    auth.login = login;
    auth.createUser = createUser;
  }
})();