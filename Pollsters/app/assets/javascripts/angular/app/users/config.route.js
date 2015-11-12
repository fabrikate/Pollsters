(function(){
  'use strict';

  angular
  .module('app.users')
  .config(ConfigUsers);

  ConfigUsers.$inject = ['$routeProvider'];

  function ConfigUsers($routeProvider){
    $routeProvider
    .when('/user', {
      templateUrl: 'partials/polls/index.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    })
  }


})();