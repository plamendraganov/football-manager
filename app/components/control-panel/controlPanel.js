'use strict';

angular.module('myApp.controlPanel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/control', {
        templateUrl: 'components/control-panel/controlPanel.html',
        controller: 'ControlPanelController'
    });
}])

.controller('ControlPanelController', [
    '$scope',
    'chooseTeamService',
    'transferInService',
    function($scope, chooseTeamService, transferInService) {
        $scope.myTeam = chooseTeamService.getMyTeam();
        $scope.startBudget = $scope.myTeam.budget | 0;
        $scope.transferIn = transferInService.getTransferIn();
    }
])
