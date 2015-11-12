(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory', '$routeParams', '$request'];
  
  function PollsController(PollFactory, $routeParams, $request){
    var pollId = $routeParams.id;
    var vm = this;
    vm.polls = PollFactory.query();
    vm.poll = PollFactory.get({id: pollID});
    vm.removePoll= PollFactory.delete({id: pollID});
  };
  
})();