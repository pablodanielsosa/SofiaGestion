(function() {
'use strict';

    angular
        .module('app')
        .factory('UtilService', UtilService);

    UtilService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment'];

    function UtilService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment) {

        var service = {
            fcContainsValue:fcContainsValue,
        };
        
        return service;
               
        function fcContainsValue(value){
            var result = false;
            if((value != null && !angular.isUndefined(value)) && value != '')
                result = true;
            return result
        };
        
    }

})();