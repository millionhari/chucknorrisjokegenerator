var app = angular.module('dadJokes', [
  'dadJokes.services',
  'dadJokes.joke',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: "app/joke/joke.html",
      controller: "SingleJokeCtrl as joke"
    })
    .state('submitjoke',{
      url: "/submitjoke",
      templateUrl: "app/joke/joke.html",
      controller: "SingleJokeCtrl as joke"
    });
});
