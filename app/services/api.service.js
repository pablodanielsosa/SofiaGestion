(function() {
'use strict';

    angular
        .module('app')
        .factory('ApiGenericService', ApiGenericService);

    ApiGenericService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', 'AFIP'];

    function ApiGenericService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, AFIP) {

        var service = {
            fcGetObject:fcGetObject
        };
        
        return service;

        function fcGetObject(parameters, url, ignoreLoadingBar) {

            var deferred = $q.defer();

            var req = {
                 method: 'GET',
                 url: url,
                 params: parameters,
                 ignoreLoadingBar: true
            }

            $http(req).success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(MESSAGES.ERROR_GENERIC);
            });

            return deferred.promise;

        };
                
    }

})();