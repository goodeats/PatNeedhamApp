'use strict';
angular.module('MainController').controller('BlogsController', blogsController);

blogsController.$inject = [];

function blogsController(){
  console.log('hi from the blog controller');
  var vm = this;

  vm.yo = 'first blog';
}
