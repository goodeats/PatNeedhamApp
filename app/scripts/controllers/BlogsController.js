'use strict';
angular.module('MainController').controller('BlogsController', blogsController);

blogsController.$inject = [];

function blogsController(){
  console.log('hi from the blog controller');
  var vm = this;

  vm.yo = "I'll defer my blogging abilities to my Twitter account in the meantime as the time I want to spend on my work right now is focused on coding and improving my portfolio. Please check back later for more insights from Pat Needham! :)";
}
