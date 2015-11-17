(function() {
  'use strict';

  angular
  .module('app.polls')
  .controller('showController', showController);

  showController.$inject = ['PollFactory', 'OptionFactory', '$http', '$routeParams'];

  function showController ( PollFactory, OptionFactory, $http, $routeParams) {
    var vm = this;
    vm.sum = 0;

    $http.get('http://localhost:3000/api/polls/' + $routeParams.poll_id).then(function(data) {
      vm.showPoll = data.data.poll;
      vm.pollLabels = [];
      vm.pollData = [];

      vm.showPoll.options.forEach(function(item) {
        vm.pollLabels.push(item.answer);
        vm.pollData.push(item.vote)
      })
      console.log(vm.pollData);
      vm.pollData.forEach(function(item) {
        vm.sum += item;
      })
    })
    vm.selected = '';
    vm.handle = 'twitterHandle' || 'PollstersCo';
  }

})();
