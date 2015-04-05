/*global $:true */
/*global Backbone:true */
'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

trace('If you can read this, you are probably a web developer :)');

(function(){

  angular
    .module('Pat', []);

  angular
    .module('Pat')
    .controller('MainCtrl', MainCtrl)
    // .filter('catDog', catDog);

  function MainCtrl() {
    var vm = this;

    vm.ga = 'https://generalassemb.ly/education/web-development-immersive';
    vm.scarborough = 'https://www.google.com/maps/place/Scarborough,+ME/@43.5918427,-70.3733864,12z/data=!3m1!4b1!4m2!3m1!1s0x4cb2a276c62bca91:0x20a644d65a944ba5';
    vm.wwwr = 'http://www.wewatchwereview.com/';
    vm.project_2 = 'http://teamberners-lee.github.io/ProjectManagementApp/';
    vm.about = 'I am currently enrolled in the Boston General Assembly <a href="www.google.com">Web Development Immersive (WDI)</a> program to acquire the skills to bring ideas to life.';

    // {
    //   'I am currently enrolled in the Boston General Assembly Web Development Immersive (WDI) program to acquire the skills to bring ideas to life.',
    //   'I have a background in financial services where I last managed the daily operations of a platform of alternative investments (i.e., hedge funds, private equities, etc.) for high net worth clients.',
    //   'I want to take my experience working well under pressure to produce user-friendly results from complex information into the public forum that is the world wide web.',
    //   'The WDI ends in early April and I will be excited to bring my new skills to a company within the Greater Boston tech community and have the opportunity to do some contract work until then.'};

    // vm.butt.personal = {
    //   'I grew up in Scarborough, Maine where I enjoyed the beach in the summer and mountains in the winter.',
    //   'Having lived in Greater Boston for the past six years, I spend free time with friends, cheering on the Boston sports teams, playing guitar, and otherwise staying in motion.}'};

    vm.cat = "dog";

  }


})();
