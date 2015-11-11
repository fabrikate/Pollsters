(function(){
  'use strict';


  angular
  .module('app.polls')
  .config(ConfigPolls);

  ConfigPolls.$inject = ['$routeProvider'];

  function ConfigPolls($routeProvider){
    $routeProvider
    .when('/polls', {
      templateUrl: '/partials/polls/index.html',
      controller: 'pollsController',
      controllerAs: 'vm'
    })
    .when('/polls/:poll_id',{
      templateUrl: '/partials/polls/show.html',
      controller: 'pollsController',
      controllerAs: 'vm'
    })
  }

})();