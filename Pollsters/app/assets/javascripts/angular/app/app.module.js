(function(){
  'use strict';

  angular
  .module('app', [
    'ngRoute',
    'ngResource',
    'app.polls',
    'app.users',
    'app.core'])

  .config(configModule)

  configModule.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

  function configModule($httpProvider, $routeProvider, $locationProvider) {
    //figure out which of the above three I actually need
    $routeProvider
      .otherwise({redirectTo: '/polls'});
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  };
})();

