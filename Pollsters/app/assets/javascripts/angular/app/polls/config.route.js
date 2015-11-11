(function(){
  'use strict';


  angular
  .module('app.polls')
  .config(ConfigPolls);

  ConfigPolls.$inject = ['$routeProvider'];

  function ConfigPolls($routeProvider){
    $routeProvider
    .when('/polls', {
      // templateUrl: FIGURE OUT URL PATH,
      controller: 'pollsController'
    })
    .when('/polls/:poll_id',{
      // templateUrl: FIGURE OUT URL PATH,
      controller: 'pollsController'
    })
  }

})();