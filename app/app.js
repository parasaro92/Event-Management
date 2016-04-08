var myApp = angular 
  .module('myApp', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/add-event', {
      templateUrl: 'view/add-event.html',
      controller: 'formCtrl',
      controllerAs: 'eventCtrl'
    })

    // .when('/contact/:parm1', {
    //   templateUrl: 'view/contact.html',
    //   controller: 'ContactCtrl as vm'
    // })

    .otherwise({redirectTo: '/'})

    $locationProvider.html5Mode(true);
})