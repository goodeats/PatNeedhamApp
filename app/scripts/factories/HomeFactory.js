'use strict';
angular.module('PatApp').factory('HomeFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var home = [];

  var homeMessage = function(){
    var welcome = ['welcome to my website!'];
    // debugger
    angular.copy(welcome, home);
    // console.log('welcome to my website!');
  };

  return {
    home: home,
    homeMessage: homeMessage
  };

}]);
