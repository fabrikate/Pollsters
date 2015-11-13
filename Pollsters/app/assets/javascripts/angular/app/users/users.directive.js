(function() {
  'use strict';

  angular.module('app.users')
    .directive('psSignup', psSignup);

  function psSignup() {
    return {
      templateUrl: '/partials/users/ps-signup.html',
      restrict: 'E'
    }
  }


})();