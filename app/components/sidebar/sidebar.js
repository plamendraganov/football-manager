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
    function($scope, getClubDataService) {
        $scope.clubs = [];

        // $scope.clubs = ['Real', 'Milan', 'Chelsea'];

        $scope.clubInfo = [];

        $scope.isClubSelected = false;

        getClubDataService.getRepos()
            .then(function(data){
                $scope.clubs = data;
            })

        $scope.selectClub = function(club) {
            $scope.clubInfo = club;
            console.log($scope.clubInfo);
            $scope.isClubSelected = true;
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
