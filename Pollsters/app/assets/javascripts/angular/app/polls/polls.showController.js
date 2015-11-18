(function() {
  'use strict';

  angular
  .module('app.polls')
  .controller('showController', showController);

  showController.$inject = ['PollFactory', 'OptionFactory', '$http', '$routeParams'];

  function showController ( PollFactory, OptionFactory, $http, $routeParams) {
    var vm = this;
    vm.pollNum = $routeParams.poll_id
    //following 3 functions allow a user to vote on the show page
    vm.upVote = function(){
      var ID = vm.chooseVote;
      var choice = OptionFactory.get({id:ID}, function() {
        choice.option.vote += 1;
        choice.$update(choice.option);
        vm.showFunctionality();
        vm.sum++;
      });
    };
    vm.showFunctionality = function() {
      PollFactory.get({id: vm.pollNum}).$promise.then(function(data) {
        vm.showPoll = data.poll;
        vm.pollLabels = [];
        vm.pollData = [];

        vm.showPoll.options.forEach(function(item) {
          vm.pollLabels.push(item.answer);
          vm.pollData.push(item.vote)
        })
        console.log('pollData', vm.pollData)
      })
    }
    vm.findSum = function() {
      vm.sum = 0;
      vm.pollData.forEach(function(item) {
        console.log('tem is, ', item);
        vm.sum += item;
      })
    }
    // variable tied to what graph style is selected.
    vm.selected = '';
    vm.showFunctionality();


  }
})();
