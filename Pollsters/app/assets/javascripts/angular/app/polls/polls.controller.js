(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory', 'OptionFactory'];

  function PollsController(PollFactory, OptionFactory){
    var vm = this;

    var Polls = PollFactory.get({}, function(data) {
      vm.Polls = data.polls;
    });

    var Options = OptionFactory.get({}, function(data) {
      vm.Options = data.options;
    })

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

    vm.savePollName = function() {
      vm.createdPoll = new PollFactory();
      vm.createdPoll.title = vm.poll.title;
      PollFactory.save(vm.createdPoll, function() {
        console.log('saved api call: ', vm.createdPoll);
      })
      // $('.pollTitle').hide();
    }
    vm.save = function() {
      vm.option.poll_id = vm.Polls.length;
      vm.optionsDB.push(angular.copy(vm.option));
      vm.option.poll_id = null;
      vm.option.answer = '';
    }
    vm.saveToDB = function() {
      vm.optionsDB.forEach(function(item) {
        vm.createdOption = new OptionFactory();
        vm.createdOption.answer = item.answer
        vm.createdOption.poll_id = item.poll_id
        vm.createdOption.vote = item.vote
        OptionFactory.save(vm.createdOption, function() {
          console.log('saved api option ', vm.createdOption);
        })
      })
    }
  };

})();

