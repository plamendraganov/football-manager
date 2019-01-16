'use strict';

angular.module('showPlayersService', [])
    .service('showPlayersService', [
        function() {
            this.players = [];

            this.setPlayers = function(players) {
                this.players = players;
            }

            this.getPlayers = function() {
                return this.players;
            }
        }
    ]);
    