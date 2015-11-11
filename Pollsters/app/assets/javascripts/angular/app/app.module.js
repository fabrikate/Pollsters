(function(){
  'use strict';

  angular
  .module('app', [
    'ngRoute',
    'ngResource',
    'app.polls',
    'app.users',
    'app.core'])
  
  .config(congfigModule)

  configModule.$inject = ['$routeProvider'];

  function configModule($routeProvider){
    $routeProvider.otherwise({
      redirectTo: '/polls'
    });
  }
})();

