'use strict';

angular.module('myApp.teams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {
    templateUrl: 'components/teams/teams.html',
    controller: 'TeamsController'
  });
}])

.controller('TeamsController', [
    '$scope',
    'getClubDataService',
    'chooseTeamService',
    function($scope, getClubDataService, chooseTeamService) {
    $scope.clubs = [];

    getClubDataService.getRepos()
        .then(function(data){
        $scope.clubs = data;
    })

    $scope.takeClub = function(club) {
        chooseTeamService.setMyTeam(club);
    }
}]);
