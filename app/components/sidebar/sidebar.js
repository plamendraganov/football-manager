'use strict';

angular.module('myApp.sidebar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sidebar', {
    templateUrl: 'components/sidebar/sidebar.html',
    controller: 'SidebarController'
  });
}])

.controller('SidebarController', [
    '$scope',
    'getClubDataService',
    'chooseTeamService',
    function($scope, getClubDataService, chooseTeamService) {
        $scope.clubs = [];

        // $scope.clubs = ['Real', 'Milan', 'Chelsea'];

        $scope.clubInfo = [];

        $scope.isClubSelected = false;

        $scope.myTeamSelected = [];

        getClubDataService.getRepos()
            .then(function(data){
                $scope.clubs = data;
            })

        $scope.selectClub = function(club) {
            $scope.clubInfo = club;

            $scope.isClubSelected = true;
        }

        $scope.addPlayer = function(player) {
            chooseTeamService.addToMyTeam(player);
            var test = chooseTeamService.getMyTeam();
            console.log(test);
        }

        $scope.takeClub = function(club) {
            chooseTeamService.setMyTeam(club);
        }
    }
])

    .filter('shortenFirstName', function() {
        var shortName = '';

        return function(inputVal) {
            if (inputVal.length > 18) {
                let separateNames = inputVal.split(' ');
                let firstLetter = separateNames[0].charAt(0);
                let arrLeft = separateNames.slice(1);
                shortName = firstLetter + '. ' + arrLeft.join(' ');
                return shortName;
            } 

            return inputVal;
        }
    }) ;
