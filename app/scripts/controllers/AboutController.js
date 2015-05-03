'use strict';

function aboutController(){
  console.log('hi from the about controller');
  var vm = this;

  vm.ga = 'https://generalassemb.ly/education/web-development-immersive';
  vm.scarborough = 'https://www.google.com/maps/place/Scarborough,+ME/@43.5918427,-70.3733864,12z/data=!3m1!4b1!4m2!3m1!1s0x4cb2a276c62bca91:0x20a644d65a944ba5';
}

angular.module('MainController').controller('AboutController', aboutController);

aboutController.$inject = [];
