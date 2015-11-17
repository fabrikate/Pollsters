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
      controller: 'PollsController',
      controllerAs: 'vm'
    })
    .when('/about',{
      templateUrl: '/partials/about/about.html'
    })
    .when('/polls/new', {
      templateUrl: '/partials/polls/create.html',
      controller: 'PollsController',
      controllerAs: 'vm'
    })
    .when('/polls/:poll_id',{
      templateUrl: '/partials/polls/show.html',
      controller: 'showController',
      controllerAs: 'vm'
    })
  }
})();
