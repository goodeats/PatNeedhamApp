'use strict';
angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = [];

function homeController(){
  console.log('hi from the home controller');
  var vm = this;

  vm.home = 'welcome to my website!';
}
