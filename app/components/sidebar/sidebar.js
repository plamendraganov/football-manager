'use strict';

angular.module('myApp.sidebar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sidebar', {
    templateUrl: 'components/sidebar/sidebar.html',
    controller: 'SidebarController'
  });
}])

.controller('SidebarController', [
    '$scope',
    'getClubDataService',
    'chooseTeamService',
    'transferInService',
    function($scope, getClubDataService, chooseTeamService, transferInService) {
        $scope.clubs = [];

        // $scope.clubs = ['Real', 'Milan', 'Chelsea'];

        $scope.clubInfo = [];

        $scope.isClubSelected = false;

        $scope.myTeamSelected = [];

        $scope.detailsShown = false;

        getClubDataService.getRepos()
            .then(function(data){
                $scope.clubs = data;
            })

        $scope.selectClub = function(club) {
            $scope.clubInfo = club;

            $scope.isClubSelected = true;
        }

        $scope.buyPlayer = function(player) {
            chooseTeamService.addToMyTeam(player);         
            transferInService.setTransferIn(player.price);
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
    }) ;
