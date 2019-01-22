'use strict';

angular.module('myApp.buyingPlayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buying', {
    templateUrl: 'components/buying-players/buyingPlayers.html',
    controller: 'BuyingPlayersController'
  });
}])

.controller('BuyingPlayersController', [
    '$scope',
    'getClubDataService',
    'chooseTeamService',
    'transferInService',
    function($scope, getClubDataService, chooseTeamService, transferInService) {
        $scope.clubs = [];

        $scope.clubInfo = [];

        $scope.myClub = chooseTeamService.getMyTeam();

        $scope.isClubSelected = false;

        $scope.myTeamSelected = [];

        $scope.detailsShown = false;

        getClubDataService.getRepos()
            .then(function(data){
                $scope.clubs = data.filter((club) => {
                    return club.clubName !== $scope.myClub.clubName;
                });
            })

        $scope.selectClub = function(club) {
            $scope.clubInfo = club;

            $scope.isClubSelected = true;
        }

        $scope.buyPlayer = function(player) {
            chooseTeamService.addToMyTeam(player);         
            transferInService.setTransferIn(player.price);

            var playerIndex = $scope.clubInfo.players.indexOf(player);

			if (playerIndex !== -1) {
				$scope.clubInfo.players.splice(playerIndex, 1);
			}
        }

        $scope.showDetails = function() {
            this.detailsShown = true;
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
    });

