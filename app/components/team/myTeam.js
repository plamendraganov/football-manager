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

		$scope.detailsShown = false;

		$scope.showDetails = function() {
            this.detailsShown = true;
        }
    }
])
