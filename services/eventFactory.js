myApp.factory('eventFactory', function(){

  var eventFactory = {};
  var events = [];

  eventFactory.getAllEvent = function(){
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