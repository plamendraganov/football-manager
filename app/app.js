'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.sidebar',
  'myApp.teams',
  'myApp.myTeam',
  'myApp.controlPanel',
  'myApp.navbar',
  'myApp.startingTeam',
  'myApp.sellingPlayers',
  'myApp.buyingPlayers',
  'requestDataService',
  'showPlayersService',
  'chooseTeamService',
  'transferInService',
  'transferOutService',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
