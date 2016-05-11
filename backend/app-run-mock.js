myApp.run(function($httpBackend){

  $httpBackend.whenGET(/partials\/.*/).passThrough();
  $httpBackend.whenGET(/view\/.*/).passThrough();
  $httpBackend.whenGET(/services\/.*/).passThrough();
  $httpBackend.whenGET(/backend\/.*/).passThrough();

  var errorCounter = 0;
  var events = 
  [
    {
      "name": "Sherlock Holmes", 
      "description": "A great movie", 
      "date": "2016-05-27", 
      "category": 
      {
        "id": "1", "name": "Cinema"
      },
      "email": "mystery@mys.com",
      "location": "New York"
    },
    {
      "name": "Jungle Book", 
      "description": "Wow movie", 
      "date": "2016-04-08", 
      "category": 
      {
        "id": "2", "name": "Cinema"
      },
      "email": "jungle@man.com",
      "location": "Dublis"
    },
    {
      "name": "Cricket", 
      "description": "A Good game", 
      "date": "2016-05-25", 
      "category": 
      {
        "id": "3", "name": "Entertainment"
      },
      "email": "powers@war.com",
      "location": "Miami"
    },
    {
      "name": "Dance", 
      "description": "A Great move", 
      "date": "2016-06-12", 
      "category": 
      {
        "id": "5", "name": "Hobby"
      },
      "email": "fun@game.com",
      "location": "Mount Fuji"
    },
    {
      "name": "Swimming", 
      "description": "Fun", 
      "date": "2016-05-20", 
      "category": 
      {
        "id": "4", "name": "Hobby"
      },
      "email": "fun@game.com",
      "location": "Las Vegas"
    }
  ];

  $httpBackend.whenGET('events').respond(events);

  $httpBackend.whenPOST('addevent').respond(function(method, url, data){
    var evt = angular.fromJson(data);
    // Add an ID
    errorCounter = errorCounter + 1;
    if (errorCounter%3 == 0){
      return [404, {}, {}];
    }
    // push into the events array
    evt.id = events.length + 1;
    events.push(evt);
    return [200, {'addEventResult': true}, {}];

  });

  // removes the from the current list of events

  $httpBackend.whenPOST('deleteevent').respond(function(method, url, data){
    var eventToDelete = angular.fromJson(data);
    // Add an ID
    errorCounter = errorCounter + 1;
    if (errorCounter%3 == 0){
      return [404, {}, {}];
    }
    // push into the events array
    for(i=0; i<events.length; i++){
      if(events[i].name == eventToDelete.name){
        events.splice(i, 1);
      }
    };
    return [200, {'addEventResult': true}, {}];

  });
});