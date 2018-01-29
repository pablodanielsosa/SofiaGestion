(function() {
'use strict';

    angular
        .module('app')
        .factory('CodeErrorService', CodeErrorService);

    CodeErrorService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment'];

    function CodeErrorService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment) {

        var service = {
            fcGetMessageErrorCode:fcGetMessageErrorCode,
        };
        
        return service;
               
        function fcGetMessageErrorCode(code){
            
            
           
        };
        
    }

})();