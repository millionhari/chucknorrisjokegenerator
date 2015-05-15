angular.module('chuckMe.joke', [])
  .controller('SingleJokeCtrl', function(Jokes){
    var self = this;

    self.displayJoke = function(){
      // console.log(Jokes.getJoke());
      console.log('hello');
    };
});
