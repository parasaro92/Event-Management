myApp.factory('eventFactory', function($http){

  var eventFactory = {};
  var events = [];

  eventFactory.getAllEvent = function(){

    events = $http.get('events.json').then(function(response){

      var data = response.data;
      return data;
    })
    return events;
  }

  eventFactory.createEvent = function(event, eventList)
  {
    events.push(event);
    eventList = events;

    return eventList;
  }

  return eventFactory;
})