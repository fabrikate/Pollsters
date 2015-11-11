(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('pollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;

  }

})();