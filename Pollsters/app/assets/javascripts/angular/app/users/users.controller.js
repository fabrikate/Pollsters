(function(){
  'use strict';

  angular
  .module('app.users')
  .controller('usersController', UsersController);

  UsersController.$inject = [$scope, 'PollFactory'];

  function UsersController($scope, PollFactory){
  
  }

})();