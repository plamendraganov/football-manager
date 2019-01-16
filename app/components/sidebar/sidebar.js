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

        getClubDataService.getRepos()
            .then(function(data){
                $scope.clubs = data;
            })

        $scope.selectClub = function(club) {
            alert(club.title);
        }
    }
])

