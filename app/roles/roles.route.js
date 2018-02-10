(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.roles', {
            url: '/roles',
            cache: false,
            data: {pageTitle: 'roles'}, 
            views: {
                'main@': {
                    templateUrl:  'app/roles/roles.html',
                    controller:   'RolesController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
