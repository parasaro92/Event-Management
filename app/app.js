var myApp = angular 
  .module('myApp', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/add-event', {
      templateUrl: 'view/add-event.html',
      controller: 'formCtrl',
      controllerAs: 'eventCtrl'
    })

    .when('/event-list', {
      templateUrl: 'view/event-list.html',
      controller: 'eventManagerCtrl',
      controllerAs: 'managerCtrl'
    })

    .otherwise({redirectTo: '/'})

    $locationProvider.html5Mode(true);
})