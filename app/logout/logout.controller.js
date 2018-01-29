(function() {
'use strict';

    angular
        .module('app')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', '$location', '$cookies', 'SESSIONS', '$log', 'IntervalService', 'Idle'];
    function LogoutController($scope, $location, $cookies, SESSIONS, $log, IntervalService, Idle) {
        var vm = this;
        
        activate();

        function activate() {
            Idle.unwatch();
            sessionStorage.removeItem(SESSIONS.USER_SESSION);
            $location.path('/login');
        }
    }
})();