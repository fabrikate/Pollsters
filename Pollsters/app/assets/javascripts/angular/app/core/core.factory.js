(function(){
  'use strict';
  
  angular
  .module('app.core')
  .factory('PollFactory', PollFactory);

  PollFactory.$inject = ['ngResource']

  function PollFactory(ngResource){ 
  
  }
})();