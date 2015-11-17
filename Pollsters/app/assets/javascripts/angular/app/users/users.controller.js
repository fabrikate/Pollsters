(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserService', 'AuthService'];

  function UsersController($routeParams, UserService, AuthService) {
    var vm = this;

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
      clearMessages();
    }

    function togglePwReset() {
      vm.resetPw = true;
      clearMessages();
    }

    function updateUser() {
      var updateEmailResponse;
      var updatePasswordResponse;
      clearMessages();
      //send in per request update type
      //update email
      if (vm.updateEmail) {
        updateEmailResponse = UserService.update({id: vm.user.id}, {email: vm.user.email});
        updateEmailResponse.$promise.then(function(data) {
          vm.emailChanged = 'Email updated successfully.'
          getUserInfo(true);
        }, function(response) {
          vm.emailErrors = response.data.email;
          vm.passwordErrors = response.data.password;
          getUserInfo(false);
        });
      }
      //update password
      if (vm.user.password) {
        //put pw comparison in user factory? (also used on signup page)
        if (vm.user.password === vm.confirmPw) {
          updatePasswordResponse = UserService.update({id: vm.user.id}, {password: vm.user.password});
          updatePasswordResponse.$promise.then(function(data) {
            vm.passwordChanged = 'Password changed successfully.';
            clearUserPw();
            vm.resetPw = false;
          }, function(response) {
            vm.emailErrors = response.data.email;
            vm.passwordErrors = response.data.password;
            clearUserPw();
          });
        } else {
          clearUserPw();
          return vm.passwordsNotMatched = 'Passwords do not match.';
        }
      }
    }

    function clearUserPw() {
      vm.user.password = null;
      vm.confirmPw = null;
    }

    function reset() {
      vm.updateEmail = false;
      vm.resetPw = false;
      clearMessages();
    }

    function clearMessages() {
      vm.emailErrors = null;
      vm.passwordErrors = null;
      vm.passwordNotMatched = null;
      vm.emailChanged = null;
      vm.passwordChanged = null;
    }

    vm.toggleEmailShow = toggleEmailShow;
    vm.togglePwReset =  togglePwReset;
    vm.updateUser = updateUser;
    vm.reset = reset;
    getUserInfo(true);
  }
})();