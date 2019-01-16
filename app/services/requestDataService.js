'use strict';

angular.module('requestDataService', [])
    .service('getClubDataService', [
        '$http',
        '$q',
        function($http, $q) {
            function getRepos() {
                var deferred = $q.defer();

                $http.get('https://api.myjson.com/bins/sw3sg')
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
