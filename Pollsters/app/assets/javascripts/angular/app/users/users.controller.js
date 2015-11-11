(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('usersController', UsersController);

  UsersController.$inject = ['PollFactory'];

  function UsersController(PollFactory){
    var vm = this;
  }
})();