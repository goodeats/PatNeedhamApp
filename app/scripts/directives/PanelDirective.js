'use strict';
angular.module('MainDirective').directive('patPanel', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/panel.html',
    controller: 'PanelController',
    controllerAs: 'panelController',
    bindToController: true,
    scope: {},
    // link: function($scope, element, attrs){

    // }
  };
}]);
