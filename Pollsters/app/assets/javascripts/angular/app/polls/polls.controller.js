(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;
    vm.polls = PollFactory.query()

    vm.createPoll = function(pollID){
      vm.currentPoll = PollFactory.get({poll: pollID});
    };
    vm.option = {
      name: '',
      vote: 0
    }
    vm.poll = {
      title: '',
      options: []
    }
    vm.save = function() {
      console.log('option', vm.option);
      console.log('poll', vm.poll);
    }
  };

})();

