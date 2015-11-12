(function(){
  'use strict';
  angular
    .module('app.core')
    .directive('Navbar', function(){
      return {
        templateUrl: '/partials/layout/navbar.html',
        restrict: 'E',
        scope: {
          navbar: '=navbarData'
        }
      }
    });
});