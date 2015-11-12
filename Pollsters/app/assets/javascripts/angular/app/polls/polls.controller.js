(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory', '$routeParams'];
  
  function PollsController(PollFactory, $routeParams){
    var pollID = $routeParams.id;
    var vm = this;
    vm.polls = PollFactory.query();
    // vm.poll = PollFactory.get({id: pollID});
    // vm.removePoll= PollFactory.delete({id: pollID});
  };

})();