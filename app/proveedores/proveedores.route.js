(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.proveedores', {
            url: '/proveedores',
            cache: false,
            data: {pageTitle: 'proveedores'}, 
            views: {
                'main@': {
                    templateUrl:  'app/proveedores/proveedores.html',
                    controller:   'ProveedoresController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
