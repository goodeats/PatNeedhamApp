'use strict';

function navbarController(){
  console.log('hi from the navbar controller');
}

angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = [];
