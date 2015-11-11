(function(){
  'use strict';

  angular
  .module('app.polls')
  .controller('pollsController', PollsController);

  PollsController.$inject = [$scope, 'PollFactory'];

  function PollsController($scope, PollFactory){

  }

})();