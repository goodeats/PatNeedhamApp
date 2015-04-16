'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

trace('If you can read this, you are probably a web developer :)');


/**
 * @ngdoc overview
 * @name PatApp
 * @description
 * # PatApp
 *
 * Main module of the application.
 */
  angular
    .module('PatApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'MainController',
      'MainDirective'
    ]).run(console.log('hi'));


