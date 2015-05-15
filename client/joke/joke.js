angular.module('chuckMe.joke', [])
  .controller('SingleJokeCtrl', function(Jokes){
    var self = this;
    self.singleJoke = "adsf";
    var getRandomInt = function(min, max){
      return Math.floor(Math.random()*(max - min)) + min;
    };

    self.displayJoke = function(){
        Jokes.getJoke()
        .then(function(response){
          self.singleJoke = response[getRandomInt(0, response.length)].line;
        });
    };
});
