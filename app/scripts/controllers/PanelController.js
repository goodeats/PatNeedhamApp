'use strict';

function panelController(){
  console.log('hi from the panel controller');
  var vm = this;

}

angular.module('MainController').controller('PanelController', panelController);

panelController.$inject = [];
