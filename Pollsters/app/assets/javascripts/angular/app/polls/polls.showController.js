(function() {
  'use strict';

  angular
  .module('app.polls')
  .controller('showController', showController);

  showController.$inject = ['PollFactory', 'OptionFactory', '$http', '$routeParams'];

  function showController ( PollFactory, OptionFactory, $http, $routeParams) {
    $http.get('http://localhost:3000/api/polls/' + $routeParams.poll_id).then(function(data) {
       vm.showPoll = data.data.poll;
      console.log(vm.showPoll);
    })
    vm.poll =
  }

})();
