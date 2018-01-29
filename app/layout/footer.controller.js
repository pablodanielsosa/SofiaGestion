(function() {
'use strict';

    angular
        .module('app')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$log', '$cookies', 'SESSIONS', 'CONFIG_APP'];
    function FooterController($scope, $log, $cookies, SESSIONS, CONFIG_APP) {

        var vm        = this;
        vm.app_empresa     = CONFIG_APP.APP_EMPRESA;
        vm.app_developers  = CONFIG_APP.APP_DEVELOPERS;

    };


})();