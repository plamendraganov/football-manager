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
    }
])
