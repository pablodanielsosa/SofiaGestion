(function() {
'use strict';

    angular
        .module('app')
        .factory('ProgressbarService', ProgressbarService);

    ProgressbarService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment', '$interval', '$location', 'ngProgressFactory'];

    function ProgressbarService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment, $interval, $location, ngProgressFactory) {
        
        var progressbar;
        
        var service = {
            fcProgressbarStart:fcProgressbarStart,
            fcProgressbarComplete:fcProgressbarComplete,
        };
        
        return service;
               
        function fcProgressbarStart(){
            progressbar = ngProgressFactory.createInstance();
            progressbar.start();
            progressbar.setColor('white');
            progressbar.setHeight('3px');
        };
        
        function fcProgressbarComplete(){
            progressbar.complete();
        }
        
    }

})();