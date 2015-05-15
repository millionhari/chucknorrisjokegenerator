var dadJokes = angular.module('dadJokes.services', []);

dadJokes.factory('Jokes', function($http){
  
  // Get Joke
  var getJoke = function(){
    return $http({
      method: "GET",
      url: '/api/jokes'
    }).then(function(response){
      return response.data;
    }).catch(function(error){
      console.error('getJoke error', error);
    });
  };

  return {
    getJoke: getJoke
  };
});
