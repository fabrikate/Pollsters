(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory', 'OptionFactory'];

  function PollsController(PollFactory, OptionFactory){
    var vm = this;

    //upvote
    vm.upVote = function(){
      var ID = vm.chooseVote;
      var choice = OptionFactory.get({id:ID}, function(){
        choice.option.vote += 1;
        choice.$update(choice.option);
      });
    };

    // query all polls from the database
    var Polls = PollFactory.get({}, function(data) {
      vm.Polls = data.polls;
    });
    // query all options from the database
    var Options = OptionFactory.get({}, function(data) {
      vm.Options = data.options;
    })

    // form objects
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

    //save poll name to the database
    vm.savePollName = function() {
      vm.createdPoll = new PollFactory();
      vm.createdPoll.title = vm.poll.title;
      PollFactory.save(vm.createdPoll).$promise.then(function(data) {
        vm.currentPoll_id = data.poll.id;
      })
      $('.pollTitle').hide();
    }

    vm.save = function() {
      vm.option.poll_id = vm.currentPoll_id;
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
        })
      })
    }

    vm.delete = function(option) {
      for ( var i = 0; i < vm.optionsDB.length; i++ ) {
        if (vm.optionsDB[i].answer === option) {
          vm.optionsDB.splice([i], 1);
        }
      }
    }
  };

})();

// the actual poll id - > where?
// save that to pol id in options before we push to DB
