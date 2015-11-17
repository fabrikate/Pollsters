(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['$location', '$routeParams', 'PollFactory', 'OptionFactory', '$window', 'AuthService'];

  function PollsController($location, $routeParams, PollFactory, OptionFactory, $window, AuthService) {
    var vm = this;

    //ensure logged in for creating a poll
    function ensureLoggedIn() {
      console.log($location.path() === '/polls/new');
      if ($location.path() === '/polls/new') {
        if (!AuthService.current) {
          $location.path('/');
        }
      }
    }
    //upvote
    vm.upVote = function(){
      var ID = vm.chooseVote;
      var choice = OptionFactory.get({id:ID}, function(){
        choice.option.vote += 1;
        var url = '/polls/'+ choice.option.poll_id
        choice.$update(choice.option);
        $window.location.href = url;
      });
    };

    // query all polls from the database
    var Polls = PollFactory.get({}, function(data) {
      vm.Polls = data.polls;
    });

    // query all options from the database
    var Options = OptionFactory.get({}, function(data) {
      vm.Options = data.options;
    });
    // form objects
    vm.option = {
      answer: '',
      vote: 0,
      poll_id: null
    };
    vm.poll = {
      title: '',
      id: null
    };
    vm.pollDB = [];
    vm.optionsDB = [];

    //save poll name to the database
    vm.savePollName = function() {
      
      vm.createdPoll = new PollFactory();
      vm.createdPoll.title = vm.poll.title;
      vm.createdPoll.user_id = AuthService.current
      PollFactory.save(vm.createdPoll).$promise.then(function(data) {
        vm.currentPoll_id = data.poll.id;
      })
      $('.pollTitle').hide();
    };
    // save the options to an array
    vm.save = function() {
      vm.option.poll_id = vm.currentPoll_id;
      vm.optionsDB.push(angular.copy(vm.option));
      vm.option.poll_id = null;
      vm.option.answer = '';
    };

    vm.saveToDB = function() {
      vm.optionsDB.forEach(function(item) {
        vm.createdOption = new OptionFactory();
        vm.createdOption.answer = item.answer
        vm.createdOption.poll_id = item.poll_id
        vm.createdOption.vote = item.vote
        OptionFactory.save(vm.createdOption, function() {
        });
      });
    };
    // delete individual options before they are pushed to the database
    vm.delete = function(option) {
      for ( var i = 0; i < vm.optionsDB.length; i++ ) {
        if (vm.optionsDB[i].answer === option) {
          vm.optionsDB.splice([i], 1);
        }
      }
    };
    ensureLoggedIn();
  }

})();

