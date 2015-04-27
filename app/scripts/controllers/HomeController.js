'use strict';
angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = ['HomeFactory'];

function homeController(HomeFactory){
  console.log('hi from the home controller');
  var vm = this;

  vm.home = HomeFactory.home[0];
}
