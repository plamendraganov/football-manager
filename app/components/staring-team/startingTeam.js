'use strict';

angular.module('myApp.startingTeam', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/start', {
    templateUrl: 'components/staring-team/startingTeam',
    controller: 'StartingTeamController'
  });
}])

.controller('StartingTeamController', [function() {

}]);