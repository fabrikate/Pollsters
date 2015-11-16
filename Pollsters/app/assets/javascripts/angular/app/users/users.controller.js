(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserService', 'AuthService'];

  function UsersController($routeParams, UserService, AuthService) {
    var vm = this;

    console.log(AuthService.current);
    vm.current = AuthService.current;

    function getUserInfo() {
      // console.log($routeParams.user);
      vm.user = UserService.get({id: $routeParams.user});
    }

    function toggleEmailShow() {
      vm.updateEmail = !vm.updateEmail;
    }

    function togglePwReset() {
      vm.resetPw = !vm.resetPw;
    }

    function updateUser() {
      var createResponse;
// update({id: vm.contact.id},
//           {
//             name: vm.contact.name,
//             email: vm.contact.email,
//             phone: vm.contact.phone
//           }

//clear out user shit when updated

//send in per request
      if (vm.user.password) {
        if (vm.user.password === vm.confirmPw) {
        //update entire account
        // createResponse = UserService.update({id: vm.user.id}, vm.user);

        } else {
          // vm.passwordErrors = ['Passwords do not match.'];
        }
      } else {
console.log(vm.user.email, vm.user.password);
        //update email only
        createResponse = UserService.update({id: vm.user.id}, {email: vm.user.email});
      }
      createResponse.$promise.then(function(data) {
        console.log(data);
        clearUserPw();
      }, function(response) {
        vm.emailErrors = response.data.email;
        vm.passwordErrors = response.data.password;
        clearUserPw();
        console.log(response.data);
      });
    }


    function clearUserPw() {
      vm.user.password = null;
      vm.confirmPw = null;
    }

    function cancel() {
      vm.updateEmail = false;
      vm.resetPw = false;
    }

    vm.toggleEmailShow = toggleEmailShow;
    vm.togglePwReset =  togglePwReset;
    vm.updateUser = updateUser;
    vm.cancel = cancel;

    getUserInfo();
  }
})();