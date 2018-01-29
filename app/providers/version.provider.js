(function() {
'use strict';

    angular
        .module('app')
        .provider('versionHelper', versionHelperProvider);

    function versionHelperProvider() {

        this.$get = VersionHelper;
        
        function VersionHelper() {

            var service = {
                fcVersion: fcVersion
            };

            return service;
            
            function fcVersion() {
                
                return '?v=' + version;
            }
        }
    }


})();