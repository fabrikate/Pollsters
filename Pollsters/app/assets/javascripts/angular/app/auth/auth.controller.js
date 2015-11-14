(function(){
  'use strict';

  angular
  .module('app.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['$cookies', 'AuthService', 'UserService'];

  function AuthController($cookies, AuthService, UserService) {
    var auth = this;

    function login() {
      // console.log(auth.user);
      return AuthService.attemptLogin(auth.user).then(function(data) {
        // console.log(data);
        if (data.data.success) {
          // console.log('data', data.data.user.id);
          // $cookies.put('currentUser', data.data.user.id);
          // console.log($cookies.get('currentUser'));
          setUser(data.data.user.id);
        } else if (data.data.error) {
          auth.error = data.data.error;
          auth.user.password = null;
        }
      });
    }

    function createUser() {
      // console.log(auth.newUser);
      var createResponse = UserService.save(auth.newUser);

      createResponse.$promise.then(function(data) {
        // console.log(data.id);

        // auth.currentUser = data.id;
        setUser(data.id);
        auth.newUser = {};
      }, function(response) {

        //ERROR HANDLING
        console.log(response);
      });
    }

    function setUser(id) {
      console.log(id);
      // id = id.toString();
      $cookies.put('currentUser', '1');
      // var user = $cookies.get("currentUser");
      // auth.currentUser = $cookies.get('currentUser');
      console.log($cookies.get('currentUser'));
    }
    setUser();
    $cookies.put('currentUser', '1');
    console.log($cookies.get('currentUser'));
    auth.login = login;
    auth.createUser = createUser;
  }
})();