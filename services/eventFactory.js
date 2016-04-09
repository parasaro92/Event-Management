myApp.factory('eventFactory', function($http, $q){

  var eventFactory = {};
  var events = [];

  eventFactory.getAllEvent = function(){

    var event1 = $http.get('events.json');
    var event2 = $http.get('events2.json');

    return $q.all([event1, event2]).then(function(result){

      var tmpevents = [];

      angular.forEach(result, function(response){
        tmpevents.push(response.data);
      });
      return tmpevents;
    }).then(function(tmpevents){
      var finalResults = tmpevents[0].concat(tmpevents[1]);
      return finalResults;
    })

    // var deferred = $q.defer();
    // $http.get('events.json').then(function(response){

    //   deferred.resolve(response.data);
    // }, function(error) {
    //   deferred.reject('An error occurred');  
    // })
    // return deferred.promise;

    // events = $http.get('events.json').then(function(response){

    //   var data = response.data;
    //   return data;
    // })
    // return events;
  }

  eventFactory.createEvent = function(event, eventList)
  {
    events.push(event);
    eventList = events;

    return eventList;
  }

  return eventFactory;
})