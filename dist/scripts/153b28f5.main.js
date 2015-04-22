"use strict";function navbarController(){console.log("hi from the navbar controller")}function panelController(){console.log("hi from the panel controller")}function homeController(){console.log("hi from the home controller");var a=this;a.home="welcome to my website!"}function aboutController(){console.log("hi from the about controller");var a=this;a.ga="https://generalassemb.ly/education/web-development-immersive",a.scarborough="https://www.google.com/maps/place/Scarborough,+ME/@43.5918427,-70.3733864,12z/data=!3m1!4b1!4m2!3m1!1s0x4cb2a276c62bca91:0x20a644d65a944ba5"}function worksController(){console.log("hi from the works controller");var a=this;a.wwwr="http://www.wewatchwereview.com/",a.project_2="http://teamberners-lee.github.io/ProjectManagementApp/"}function blogsController(){console.log("hi from the blog controller");var a=this;a.yo="I'll defer my blogging abilities to my Twitter account in the meantime as the time I want to spend on my work right now is focused on coding and improving my portfolio. Please check back later for more insights from Pat Needham! :)"}var trace=function(){for(var a=0;a<arguments.length;a++)console.log(arguments[a])};trace("If you can read this, you are probably a web developer :D"),angular.module("PatApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","MainController","MainDirective"]).run(console.log("pat says hi")),angular.module("PatApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeController",controllerAs:"homeController"}).when("/about",{templateUrl:"views/about.html",controller:"AboutController"}).when("/work",{templateUrl:"views/works.html",controller:"WorksController",controllerAs:"worksController"}).when("/work/:workId",{templateUrl:"views/work.html",controller:"WorkController",controllerAs:"workController"}).when("/blog",{templateUrl:"views/blogs.html",controller:"BlogsController",controllerAs:"blogsController"}).when("/blog/:blogId",{templateUrl:"views/blog.html",controller:"BlogController",controllerAs:"blogController"}).otherwise({redirectTo:"/"})}]),angular.module("PatApp").constant("ServerUrl","http://localhost:3000"),angular.module("MainController",[]),angular.module("MainController").controller("NavbarController",navbarController),navbarController.$inject=[],angular.module("MainController").controller("PanelController",panelController),panelController.$inject=[],angular.module("MainController").controller("HomeController",homeController),homeController.$inject=[],angular.module("MainController").controller("AboutController",aboutController),aboutController.$inject=[],angular.module("MainController").controller("WorksController",worksController),worksController.$inject=[],angular.module("MainController").controller("BlogsController",blogsController),blogsController.$inject=[],angular.module("MainDirective",[]),angular.module("MainDirective").directive("patNavbar",[function(){return{restrict:"E",templateUrl:"views/navbar.html",controller:"NavbarController",controllerAs:"navbarController",bindToController:!0,scope:{},link:function(a,b,c){console.log("hello from the navbar!")}}}]),angular.module("MainDirective").directive("patPanel",[function(){return{restrict:"E",templateUrl:"views/panel.html",controller:"PanelController",controllerAs:"panelController",bindToController:!0,scope:{},link:function(a,b,c){console.log("hello from the panel!")}}}]);