(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;

    // vm.Polls = PollFactory.get();
    // console.log(vm.Polls);
    var Polls = PollFactory.get({}, function(data) {
      vm.Polls = data.polls;
    });
    // console.log(Polls.polls);
    // console.log(Polls);
    vm.option = {
      answer: '',
      vote: 0,
      poll_id: null
    }
    vm.poll = {
      title: '',
      id: null
    }

    vm.pollDB = [];
    vm.optionsDB = [];


    vm.save = function() {
      vm.createdPoll = new PollFactory();
      vm.createdPoll.title = vm.poll.title;
      PollFactory.save(vm.createdPoll, function(){
        console.log('saved api call: ', vm.createdPoll);
      })
      vm.option.poll_id = vm.Polls.length;
      //When back from lunch make factory for options and do same thing for them.
    }
    vm.saveToDB = function() {
      vm.pollDB.push(angular.copy(vm.poll));
      console.log(vm.pollDB)
    }
  };

})();

