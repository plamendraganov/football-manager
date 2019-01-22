'use strict';

angular.module('myApp.startingTeam', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/start', {
    	templateUrl: 'components/staring-team/startingTeam',
    	controller: 'StartingTeamController'
  	});
}])

.controller('StartingTeamController', [
	'$scope',
	'getFormationDataService',
	'chooseTeamService',
  	function($scope, getFormationDataService, chooseTeamService) {

		$scope.formations = [];

		$scope.myFormation = [];
		$scope.isFormationChosen = false;
		$scope.isGoalkeeperChosen = false;
		$scope.areDefendersChosen = false;
		$scope.areMidfieldersChosen = false;
		$scope.areStrikersChosen = false;

		getFormationDataService.getRepos()
            .then(function(data){
				$scope.formations = data;
			})

		$scope.myClub = chooseTeamService.getMyTeam();

		$scope.detailsShown = false;

		$scope.goalkeepers = chooseTeamService.myGoalkeepers;
		$scope.defenders = chooseTeamService.myDefenders;
		$scope.midfielders = chooseTeamService.myMidfielders;
		$scope.strikers = chooseTeamService.myStrikers;

		$scope.selectedGoalkeeper = [];
		$scope.selectedDefenders = [];
		$scope.selectedMidfielders = [];
		$scope.selectedStrikers = [];
		$scope.lineUps = [];

		$scope.defendersCount = 0;
		$scope.midfieldersCount = 0;
		$scope.strikersCount = 0;

		$scope.showDetails = function() {
			this.detailsShown = true;
		}
		
		$scope.chooseFormation = function(formation) {
			$scope.myFormation = formation;
			$scope.isFormationChosen = true;
			$scope.defendersCount = Number($scope.myFormation.formationName[0]);
			$scope.midfieldersCount = Number($scope.myFormation.formationName[2]);
			$scope.strikersCount = Number($scope.myFormation.formationName[4]);
		}

		$scope.chooseGoalkeeper = function(goalkeeper) {
			$scope.selectedGoalkeeper = goalkeeper;
			$scope.lineUps = $scope.lineUps.concat($scope.selectedGoalkeeper);
			$scope.isGoalkeeperChosen = true;
		}

		$scope.chooseDefender = function(defender) {
			var defenderIndex = $scope.defenders.indexOf(defender);
			
			$scope.selectedDefenders.push(defender);

			if (defenderIndex !== -1) {
				$scope.defenders.splice(defenderIndex, 1);
			}

			if ($scope.selectedDefenders.length === $scope.defendersCount) {
				$scope.lineUps = $scope.lineUps.concat($scope.selectedDefenders);
				$scope.areDefendersChosen = true;
			} 
		}

		$scope.chooseMidfielder = function(midfielder) {
			var midfielderIndex = $scope.midfielders.indexOf(midfielder);
			
			$scope.selectedMidfielders.push(midfielder);

			if (midfielderIndex !== -1) {
				$scope.midfielders.splice(midfielderIndex, 1);
			}

			if ($scope.selectedMidfielders.length === $scope.midfieldersCount) {
				$scope.lineUps = $scope.lineUps.concat($scope.selectedMidfielders);
				$scope.areMidfieldersChosen = true;
			} 
		}

		$scope.chooseStriker = function(striker) {
			var strikerIndex = $scope.strikers.indexOf(striker);
			
			$scope.selectedStrikers.push(striker);

			if (strikerIndex !== -1) {
				$scope.strikers.splice(strikerIndex, 1);
			}

			if ($scope.selectedStrikers.length === $scope.strikersCount) {
				$scope.lineUps = $scope.lineUps.concat($scope.selectedStrikers);
				$scope.areStrikersChosen = true;
			}
		}
  	}
]);