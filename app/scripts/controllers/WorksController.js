'use strict';

function worksController(){
  var vm = this;

  vm.wwwr = 'http://www.wewatchwereview.com/';
  vm.project_2 = 'http://teamberners-lee.github.io/ProjectManagementApp/';

}

angular.module('MainController').controller('WorksController', worksController);

worksController.$inject = ['$scope'];
