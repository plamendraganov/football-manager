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
    function($scope, chooseTeamService) {
		$scope.myClub = chooseTeamService.getMyTeam();

		$scope.isTeamChosen = chooseTeamService.isTeamChosen;

		$scope.checkedPlayer = "";

		$scope.test = function(player) {
			$scope.checkedPlayer = player;
			console.log($scope.checkedPlayer);
		}
    }
])
