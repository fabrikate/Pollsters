(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserService'];

  function UsersController($routeParams, UserService) {
    var vm = this;

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



    vm.toggleEmailShow = toggleEmailShow;
    vm.togglePwReset = togglePwReset;

    getUserInfo();
  }
})();