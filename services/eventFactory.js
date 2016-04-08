myApp.factory('eventFactory', function(){

  var eventFactory = {};
  var events = 
  [
    {
      name: 'Sherlock Holmes', 
      description: 'A great movie', 
      date: '2016-05-27', 
      category: 
      {
        id: 1, name: 'Cinema'
      },
      email: 'mystery@mys.com',
      location: 'New York'
    },
    {
      name: 'Jungle Book', 
      description: 'Wow movie', 
      date: '2016-04-08', 
      category: 
      {
        id: 1, name: 'Cinema'
      },
      email: 'jungle@man.com'
    },
    {
      name: 'Cricket', 
      description: 'A Good game', 
      date: '2016-05-25', 
      category: 
      {
        id: 1, name: 'Entertainment'
      },
      email: 'powers@war.com'
    }
  ];

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