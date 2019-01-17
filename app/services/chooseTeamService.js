'use strict';

angular.module('chooseTeamService', [])
    .service('chooseTeamService', [
        function() {
            this.myTeam = [];

            this.setMyTeam = function(club) {
                this.myTeam = club;
            }

            this.getMyTeam = function() {
                return this.myTeam;
            }

            this.addToMyTeam = function(player) {
                this.myTeam.players.push(player);
                console.log(this.myTeam);
            }
        }
    ]);