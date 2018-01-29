(function() {
'use strict';

    angular
        .module('app')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', 'AFIP'];

    function ApiService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, AFIP) {

        var service = {
            fcGetDataSlim: fcGetDataSlim,
            fcPostDataSlim:fcPostDataSlim
        };
        
        return service;

        function fcPostDataSlim(url,data){

            var deferred = $q.defer();

            var req = {
                 method: 'POST',
                 url: CONFIG_APP.URL_BASE_API + url,
                 data: data
            }

            $http(req).success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(MESSAGES.ERROR_GENERIC);
            });

            return deferred.promise;

        };

        function fcGetDataSlim(url,parameters){

           var deferred = $q.defer();

            var req = {
                 method: 'GET',
                 url: CONFIG_APP.URL_BASE_API + url,
                 params: parameters
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