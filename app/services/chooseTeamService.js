'use strict';

angular.module('chooseTeamService', [])
    .service('chooseTeamService', [
        function() {
            this.myTeam = [];
            this.isTeamChosen = false;

            this.myGoalkeepers = [];
            this.myDefenders = [];
            this.myMidfielders = [];
            this.myStrikers = [];

            this.setMyTeam = function(club) {
                this.myTeam = club;
                this.isTeamChosen = true;
                this.myGoalkeepers = this.myTeam.players.filter((player) => {
                        return player.position === 'Goalkeeper';
                });
                this.myDefenders = this.myTeam.players.filter((player) => {
                        return player.position === 'Centre-Back' 
                            || player.position === 'Left-Back' 
                            || player.position === 'Right-Back';
                });
                this.myMidfielders = this.myTeam.players.filter((player) => {
                        return player.position === 'Defensive Midfield' 
                            || player.position === 'Central Midfield' 
                            || player.position === 'Attacking Midfield'
                            || player.position === 'Left Winger'
                            || player.position === 'Right Winger';
                });
                this.myStrikers = this.myTeam.players.filter((player) => {
                        return player.position === 'Left Winger' 
                            || player.position === 'Right Winger' 
                            || player.position === 'Centre Forward';
                });
            }

            this.getMyTeam = function() {
                return this.myTeam;
            }

            this.addToMyTeam = function(player) {
                this.myTeam.players.push(player);
                this.setMyTeam(this.myTeam);
            }
        }
    ]);