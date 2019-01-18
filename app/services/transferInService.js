'use strict';

angular.module('transferInService', [])
    .service('transferInService', [
        function() {
            this.transferIn = 0;

            this.setTransferIn = function(player) {
                var price = player.price;
                this.transferIn += price;
            }

            this.getTransferIn = function() {
                return this.transferIn;
            }
        }
    ]);