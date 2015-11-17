(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserService', 'AuthService'];

  function UsersController($routeParams, UserService, AuthService) {
    var vm = this;

    // console.log(AuthService.current);
    vm.current = AuthService.current;

    //get user's info, paramter is boolean to reset updateEmail toggle or not
    function getUserInfo(reset) {
      vm.user = UserService.get({id: $routeParams.user});

      if (reset) {
        vm.updateEmail = false;
        vm.emailErrors = true;
      }
    }

    function toggleEmailShow() {
      vm.updateEmail = true;
    }

    function togglePwReset() {
      vm.resetPw = true;
    }

    function updateUser() {
      var updatePasswordResponse;
      var updateEmailResponse;
      //send in per request
      //update email
      if (vm.updateEmail)      {
// console.log(vm.user.email, vm.user.password);
        updateEmailResponse = UserService.update({id: vm.user.id}, {email: vm.user.email});
        updateEmailResponse.$promise.then(function(data) {
          console.log(data);
          // console.log(data.email);
          // if (Array.isArray(data.email)) {
              //these are errors!
          //   vm.emailChanged = 'Email updated successfully.'
          // }
          getUserInfo(true);
        }, function(response) {
          vm.emailErrors = response.data.email;
          vm.passwordErrors = response.data.password;
          getUserInfo(false);
          console.log(response.data);
        });
      }
      //update password
      if (vm.user.password) {
        if (vm.user.password === vm.confirmPw) {
          console.log(vm.user.password, vm.confirmPw);
          updatePasswordResponse = UserService.update({id: vm.user.id}, {password: vm.user});
        } else {
          //word 'Password' is already in view
          clearUserPw();
          return vm.passwordNotMatched = 'Passwords do not match.';
        }
        updatePasswordResponse.$promise.then(function(data) {
          console.log(data);
          // console.log(data.email);
          // if (Array.isArray(data.email)) {
              //these are errors!
          //   vm.emailChanged = 'Email updated successfully.'
          // }
          clearUserPw();
        }, function(response) {
          vm.emailErrors = response.data.email;
          vm.passwordErrors = response.data.password;
          clearUserPw();
          console.log(response.data);
        });
      }
    }

    function clearUserPw() {
      vm.user.password = null;
      vm.confirmPw = null;
    }

    function reset() {
      vm.updateEmail = false;
      vm.resetPw = false;
      vm.emailErrors = null;
      vm.passwordErrors = null;
      vm.passwordNotMatched = null;
    }

    vm.toggleEmailShow = toggleEmailShow;
    vm.togglePwReset =  togglePwReset;
    vm.updateUser = updateUser;
    vm.reset = reset;

    getUserInfo(true);
  }
})();