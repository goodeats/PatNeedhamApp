'use strict';
angular.module('MainDirective').directive('patNavbar', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {},
    // link: function($scope, element, attrs){

    // }
  };
}]);
