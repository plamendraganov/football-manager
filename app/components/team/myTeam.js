'use strict';

angular.module('myApp.myTeam', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/team', {
    	templateUrl: 'components/team/myTeam.html',
    	controller: 'MyTeamController'
  	});
}])

.controller('MyTeamController', [
    '$scope',
	'chooseTeamService',
	'transferOutService',
    function($scope, chooseTeamService, transferOutService) {
		$scope.myClub = chooseTeamService.getMyTeam();

		$scope.isTeamChosen = chooseTeamService.isTeamChosen;

		$scope.checkedPlayer = "";

		$scope.test = function(player) {
			$scope.checkedPlayer = player;
			console.log($scope.checkedPlayer);
		}

		$scope.arePlayersShown = false;

		$scope.showPlayers = function() {
			$scope.arePlayersShown = true;
		}

		$scope.sellPlayer = function(player) {
			var playerIndex = $scope.myClub.players.indexOf(player);

			if (playerIndex !== -1) {
				transferOutService.setTransferOut(player.price);
				$scope.myClub.players.splice(playerIndex, 1);
				chooseTeamService.setMyTeam($scope.myClub);
			}
			return false;
		}
    }
])
