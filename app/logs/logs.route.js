(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.logs', {
            url: '/logs',
            cache: false,
            data: {pageTitle: 'logs'}, 
            views: {
                'main@': {
                    templateUrl:  'app/logs/logs.html',
                    controller:   'LogsController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
