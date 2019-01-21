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

		$scope.selectedGoalkeeper = "";

		$scope.defenderNumbers = 0;

		$scope.showDetails = function() {
			this.detailsShown = true;
		}
		
		$scope.chooseFormation = function(formation) {
			$scope.myFormation = formation;
			$scope.isFormationChosen = true;
			$scope.defenderNumbers = Number($scope.myFormation.formationName[0]);
		}

		$scope.chooseGoalkeeper = function(goalkeeper) {
			$scope.selectedGoalkeeper = goalkeeper;
			$scope.isGoalkeeperChosen = true;
		}
  	}
]);