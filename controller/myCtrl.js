myApp.controller('formCtrl', function(eventFactory){

  var vm = this;
  vm.event = [];

  vm.event = eventFactory.getAllEvent();

  vm.submitForm = function(form) {
    eventFactory.createEvent(angular.copy(form), vm.event);
    console.log(vm.event);
  }
});

// myApp.controller('AboutCtrl', function($scope, $routeParams){

//   // var vm = this;
//   $scope.input = $routeParams.parm1;
// });

// myApp.controller('ContactCtrl', function($routeParams){

//   var vm = this;
//   vm.input = $routeParams.parm1;
// });