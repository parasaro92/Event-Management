myApp.controller('formCtrl', function(eventFactory){

  var vm = this;
  // vm.event = [];
  vm.eventForm = {};
  // vm.eventForm.date = new Date(2016,0,1);
  // vm.event = eventFactory.getAllEvent();

  vm.categories = [{id: 1, name: 'Music', group: 'Entertainment'},{id: 2, name: 'Dance', group: 'Entertainment'},{id: 3, name: 'Football', group: 'Games'}, {id: 4, name: 'Cricket', group: 'Games'}];
  vm.selectedOption = {id: 1, name: 'Music'};
  vm.specialEvent = 'true';

  vm.specialType = [{name: 'Age Restricted', checked: false},{name: 'Luxory', checked: false}];

  vm.selectAllTypes = function() {
    if(vm.bothSelected) {
      vm.bothSelected = true;
    } else {
      vm.bothSelected = false;
    }

    angular.forEach(vm.specialType, function(item){

      item.checked = vm.bothSelected;
    })
  }

  vm.submitForm = function(form) {

    form.category = vm.selectedOption
    eventFactory.createEvent(angular.copy(form), vm.event);
    alert("event added successfully");
  }
});

myApp.controller('eventManagerCtrl', function(eventFactory, $filter){

  var vm = this;
  // console.log('start');
  eventFactory.getAllEvent().then(function(result){

    vm.eventList = result;
    console.log(vm.eventList);
  });
  // console.log('end');
  // vm.eventList = filterFilter(vm.eventList, {name: 'Jungle Book', category: {name: 'Cinema'} });
  vm.eventList = $filter('orderBy')(vm.eventList, 'category.name', true)

});
// myApp.controller('AboutCtrl', function($scope, $routeParams){

//   // var vm = this;
//   $scope.input = $routeParams.parm1;
// });

// myApp.controller('ContactCtrl', function($routeParams){

//   var vm = this;
//   vm.input = $routeParams.parm1;
// });