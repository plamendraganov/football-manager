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
    'transferOutService',
    function($scope, chooseTeamService, transferInService, transferOutService) {
        $scope.myTeam = chooseTeamService.getMyTeam();
        $scope.startBudget = $scope.myTeam.budget | 0;
        $scope.transferIn = transferInService.getTransferIn();
        $scope.transferOut = transferOutService.getTransferOut();
        $scope.balance = ($scope.startBudget + $scope.transferOut) - $scope.transferIn;
    }
])
