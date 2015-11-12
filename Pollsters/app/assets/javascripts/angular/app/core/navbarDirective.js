(function(){
  'use strict';
  angular
    .module('app.core')
    .directive('gsNavbar', function(){
      return {
        templateUrl: 'partials/layout/navbar.html'
      }
    });
});

