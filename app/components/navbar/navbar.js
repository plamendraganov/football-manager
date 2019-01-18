'use strict';

angular.module('myApp.navbar', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'components/view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])

.directive('fmNavbarDirective', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'components/navbar/navbar.html'
    }

});
