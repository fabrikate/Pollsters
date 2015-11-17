(function(){
  'use strict';

  angular
  .module('app.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'ipCookie', 'AuthService', 'UserService'];

  function AuthController($location, ipCookie, AuthService, UserService) {
    var auth = this;

    function login() {
      return AuthService.attemptLogin(auth.user).then(function(data) {
        if (data.data.success) {
          auth.user = {};
          setUser(data.data.user.id);
        } else if (data.data.error) {
          auth.error = data.data.error;
          auth.user = {};
        }
      });
    }

    function createUser() {
      var createResponse = UserService.save(auth.newUser);
      clearMessages();
      if (auth.newUser.password === auth.newUserPw2) {
        createResponse.$promise.then(function(data) {
          setUser(data.id);
          auth.newUser = {};
        }, function(response) {
          if (response.data.email) {
            auth.emailErrors = response.data.email;
            auth.newUser.email = null;
          }
          if (response.data.password) {
            auth.passwordErrors = response.data.password;
            resetUnmatchedPasswords();
          }
        });
      } else {
        resetUnmatchedPasswords();
        return auth.passwordsNotMatched = 'Passwords do not match.';
      }
    }

    function toggleLogin() {
      auth.showLogin = !auth.showLogin;
      auth.showSignup =  false;
      auth.dropdown = false;
    }

    function toggleSignup() {
      auth.showSignup = !auth.showSignup;
      auth.showLogin = false;
      auth.dropdown = false;
    }

    //DRY UP THIS AND CLEARUX FUNCTION ?
    function toggleDropdown() {
      auth.dropdown = !auth.dropdown;
      clearUX();
    }

    function clearUX() {
      //blank out any data for UX cleanliness
      auth.user = {};
      auth.newUser = {};
      clearMessages();
    }

    function clearMessages() {
      auth.error = null;
      auth.emailErrors = null;
      auth.passwordErrors = null;
      auth.passwordsNotMatched = null;
    }

    function resetUnmatchedPasswords() {
      auth.newUser.password = null;
      auth.newUserPw2 = null;
    }

    function logout() {
      //have server log out
      AuthService.logout().then(function(data) {
        if (data.data.message === "Logged out.")
        ipCookie.remove('current');
        console.log(ipCookie('current'));
        auth.loggedIn = false;
        $location.path('/');
      }, function(error) {
        console.log(error);
      });
    }

    function setUser(id) {
      clearUX();
      ipCookie('current', id);
      auth.showSignup = false;
      auth.showLogin = false;
      checkLoginStatus();
    }

    function checkLoginStatus() {
      AuthService.current = ipCookie('current');
      if (AuthService.current) {
        auth.loggedIn = true;
        auth.current = AuthService.current;
        return true;
      } else {
        return false;
      }
    }

    function clearShows() {
      auth.showSignup = false;
      auth.showLogin = false;
      auth.dropdown = false;
    }

    clearShows();
    checkLoginStatus();
    auth.login = login;
    auth.toggleDropdown = toggleDropdown;
    auth.createUser = createUser;
    auth.toggleLogin = toggleLogin;
    auth.toggleSignup =  toggleSignup;
    auth.logout = logout;
    auth.clearShows = clearShows;
  }
})();