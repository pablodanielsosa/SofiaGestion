(function() {
'use strict';

    angular
        .module('app')
        .factory('AuthorizationService', AuthorizationService);

    AuthorizationService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment'];

    function AuthorizationService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment) {

        var service = {
            fcAppTimeUse:fcAppTimeUse,
        };
        
        return service;
               
        function fcAppTimeUse(){
            
            var hour_ac = moment().format('HH');
            var hour_in = moment(new Date(sessionStorage.getItem(SESSIONS.APP_DATE_IN))).format('HH');
            var dif = hour_ac - hour_in;
            
            return dif
        };
        
    }

})();