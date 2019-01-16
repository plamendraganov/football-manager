'use strict';

angular.module('myApp.sidebar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sidebar', {
    templateUrl: 'components/sidebar/sidebar.html',
    controller: 'SidebarController'
  });
}])

.directive('fmDetailsDirective')

.controller('SidebarController', [
    '$scope',
    'getClubDataService',
    function($scope, getClubDataService) {
        
    }
])
