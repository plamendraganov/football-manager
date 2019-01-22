'use strict';

angular.module('requestDataService', [])
    .service('getClubDataService', [
        '$http',
        '$q',
        function($http, $q) {
            function getRepos() {
                var deferred = $q.defer();

                $http.get('https://api.myjson.com/bins/e40b8')
                    .then(function(result) {
                        deferred.resolve(result.data);
                    }, function(err) {
                        deferred.reject(err);
                    })
                return deferred.promise;
            }

            return {
                getRepos: getRepos
            }
        }
    ])
    .service('getFormationDataService', [
        '$http',
        '$q',
        function($http, $q) {
            function getRepos() {
                var deferred = $q.defer();

                $http.get('https://api.myjson.com/bins/18ez04')
                    .then(function(result) {
                        deferred.resolve(result.data);
                    }, function(err) {
                        deferred.reject(err);
                    })
                return deferred.promise;
            }

            return {
                getRepos: getRepos
            }
        }
    ]);
