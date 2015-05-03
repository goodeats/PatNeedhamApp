'use strict';

function worksController($scope){
  var vm = this;

  vm.wwwr = 'http://www.wewatchwereview.com/';
  vm.project_2 = 'http://teamberners-lee.github.io/ProjectManagementApp/';

  vm.fade = false;
  $scope.$on('$viewContentLoaded', function(){
    vm.fade = !vm.fade;
    console.log('icu');
  });

}

angular.module('MainController').controller('WorksController', worksController);

worksController.$inject = ['$scope'];
