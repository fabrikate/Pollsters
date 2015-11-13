(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;
    // vm.polls = PollFactory.query()
    var Polls = PollFactory.query();
    // vm.createPoll = function(pollID){
    //   vm.currentPoll = PollFactory.get({poll: pollID});
    // };

    vm.option = {
      name: '',
      vote: 0
    }
    vm.poll = {
      title: '',
      options: []
    }
    // Use POSTGREs to embed data and use the active model: store in the poll model
    //
    vm.save = function() {
      vm.poll.options.push(angular.copy(vm.option));
      $('#pollTitle').hide();
      vm.option.name = '';
    }
    vm.saveToDB = function() {
      var poll = new PollFactory(vm.poll);
      poll.$save().then(function() {
        vm.poll.options.push(angular.copy(vm.option));
        vm.option.name = '';
      })
    }
  };

})();

