'use strict';

angular.module('PatApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/work',{
      templateUrl: 'views/works.html',
      controller: 'WorksController',
      controllerAs: 'worksController'
    })
    .when('/work/:workId',{
      templateUrl: 'views/work.html',
      controller: 'WorkController',
      controllerAs: 'workController'
    })
    .when('/blog',{
      templateUrl: 'views/blogs.html',
      controller: 'blogsController',
      controllerAs: 'blogsController'
    })
    .when('/blog/:blogId',{
      templateUrl: 'views/blog.html',
      controller: 'BlogController',
      controllerAs: 'blogController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
