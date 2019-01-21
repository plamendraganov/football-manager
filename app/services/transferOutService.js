'use strict';

angular.module('transferOutService', [])
    .service('transferOutService', [
        function() {
            this.transferOut = 0;

            this.setTransferOut = function(price) {
                this.transferOut += price;
            }

            this.getTransferOut = function() {
                return this.transferOut;
            }
        }
    ]);