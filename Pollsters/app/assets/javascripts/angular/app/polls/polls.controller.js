(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;

    var Polls = PollFactory.query();
    vm.option = {
      name: '',
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
      vm.poll.id = vm.pollDB.length
      vm.option.poll_id = vm.poll.id;
      vm.optionsDB.push(angular.copy(vm.option));
      vm.option.name = '';
      vm.option.poll_id = null;
      console.log(vm.poll);
      console.log(vm.optionsDB);
    }
    vm.saveToDB = function() {
      vm.pollDB.push(angular.copy(vm.poll));
    }
  };

})();

