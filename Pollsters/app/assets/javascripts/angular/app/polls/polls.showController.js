(function() {
  'use strict';

  angular
  .module('app.polls')
  .controller('showController', showController);

  showController.$inject = ['PollFactory', 'OptionFactory', '$http', '$routeParams'];

  function showController ( PollFactory, OptionFactory, $http, $routeParams) {
    var vm = this;
    vm.pollNum = $routeParams.poll_id
    console.log(vm.pollNum);
    vm.sum = 0;

    vm.upVote = function(){
      var ID = vm.chooseVote;
      var choice = OptionFactory.get({id:ID}, function(){
      console.log('pre choice', choice.option)
        choice.option.vote += 1;
        choice.$update(choice.option);
        console.log('post choice', choice.option.vote)
        PollFactory.get({id:vm.pollNum}).$promise.then(function(data){
          console.log('promise data is ', data.poll)
          vm.showPoll = data.poll
        })
      });
    };

    PollFactory.get({id: vm.pollNum}).$promise.then(function(data) {
      console.log('get request ', data.poll.options);
      vm.showPoll = data.poll;
      vm.pollLabels = [];
      vm.pollData = [];

      vm.showPoll.options.forEach(function(item) {
        vm.pollLabels.push(item.answer);
        vm.pollData.push(item.vote)
      })
      vm.pollData.forEach(function(item) {
        vm.sum += item;
      })
    })
    vm.selected = '';
  }

})();
