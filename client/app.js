var app = angular.module('chuckMe', [
  'chuckMe.services',
  'chuckMe.joke',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: "joke/joke.html",
      controller: "SingleJokeCtrl as joke"
    });
});
