'use strict';

function homeController(){
  var vm = this;

  vm.home = 'welcome to my website!';
}

angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = [];
