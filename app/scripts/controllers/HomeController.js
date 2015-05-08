'use strict';

function homeController(){
  var vm = this;

  vm.home = 'welcome to my website built with Angular.js!';
}

angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = [];
