(function() {
'use strict';

    angular
        .module('app')
        .factory('IntervalService', IntervalService);

    IntervalService.$inject = ['$q','$http', 'CONFIG_APP', '$log', 'MESSAGES', '$cookies', 'SESSIONS', '$moment', '$interval', '$location'];

    function IntervalService($q, $http, CONFIG_APP, $log, MESSAGES, $cookies, SESSIONS, $moment, $interval, $location) {
        
        var stop;
        
        var service = {
            fcStartControlApp:fcStartControlApp,
            fcCloseControlApp:fcCloseControlApp,
        };
        
        return service;
               
        function fcStartControlApp(interval){
            $interval.cancel(stop);
            stop = $interval(function() {
                fcCloseApp();
            }, CONFIG_APP.TIME_CHECK_SINGLE); 
        };
        
        function fcCloseApp(){
            $log.debug('control app');
            if(CONFIG_APP.APP_DISABLED){
                $interval.cancel(stop);
                $location.path('/logout');
            };
        }
        
        function fcCloseControlApp(){
            $interval.cancel(stop);
        };
        
    }

})();