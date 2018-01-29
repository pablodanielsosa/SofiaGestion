(function() {
'use strict';

    angular
        .module('app')
        .factory('FiltersService', FiltersService);

    FiltersService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment', 'ApiService', 'UtilService'];

    function FiltersService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment, ApiService, UtilService) {

        var service = {
            fcSearch:fcSearch,
        };
        
        return service;
               
        function fcSearch(form, resource){

            var parameters = {};

            angular.forEach(form, function(value, key) {
                if(UtilService.fcContainsValue(value) && key != 'page'){
                    parameters['filters['+key+']'] = value;
                };               
            });

            $log.debug(parameters);

            parameters.page = form.page

            return ApiService.fcGetObject(resource, parameters);
        };
        
    }

})();