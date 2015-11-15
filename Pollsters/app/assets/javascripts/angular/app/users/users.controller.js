(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['AuthService'];

  function UsersController(AuthService) {
    var vm = this;

  }
})();