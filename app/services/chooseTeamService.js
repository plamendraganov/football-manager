'use strict';

angular.module('chooseTeamService', [])
    .service('chooseTeamService', [
        function() {
            this.myTeam = [];
            this.isTeamChosen = false;

            this.setMyTeam = function(club) {
                this.myTeam = club;
                this.isTeamChosen = true;
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