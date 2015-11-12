(function(){
  'use strict';
  
  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['PollFactory'];

  function UsersController(PollFactory){
    var vm = this;
  }
})();