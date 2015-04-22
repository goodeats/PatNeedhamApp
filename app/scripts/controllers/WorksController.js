'use strict';
angular.module('MainController').controller('WorksController', worksController);

worksController.$inject = [];

function worksController(){
  console.log('hi from the works controller');
  var vm = this;

  vm.wwwr = 'http://www.wewatchwereview.com/';
  vm.project_2 = 'http://teamberners-lee.github.io/ProjectManagementApp/';

}


