var myApp = angular
  .module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/about', {
      templateUrl: 'view/about.html'
      // controller: 'myCtrl as vm'
    })

    .when('/contact', {
      templateUrl: 'view/contact.html'
    })

    .otherwise({redirectTo: '/'})

    $locationProvider.html5Mode(true);
})