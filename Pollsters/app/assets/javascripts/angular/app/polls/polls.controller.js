(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('PollsController', PollsController);

  PollsController.$inject = ['PollFactory'];

  function PollsController(PollFactory){
    var vm = this;

  }

})();