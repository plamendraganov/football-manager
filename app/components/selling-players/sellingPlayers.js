'use strict';

angular.module('myApp.sellingPlayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selling', {
    templateUrl: 'components/selling-players/sellingPlayers.html',
    controller: 'SellingPlayersController'
  });
}])

.controller('SellingPlayersController', [
    '$scope',
	'chooseTeamService',
	'transferOutService',
    function($scope, chooseTeamService, transferOutService,) {
    $scope.myClub = chooseTeamService.getMyTeam();

    $scope.isTeamChosen = chooseTeamService.isTeamChosen;

    $scope.checkedPlayer = "";

    $scope.sellPlayer = function(player) {
        var playerIndex = $scope.myClub.players.indexOf(player);

        if (playerIndex !== -1) {
            transferOutService.setTransferOut(player.price);
            $scope.myClub.players.splice(playerIndex, 1);
            chooseTeamService.setMyTeam($scope.myClub);
        }
        return false;
    }
}]);
