(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.venta', {
            url: '/venta',
            cache: false,
            data: {pageTitle: 'venta'}, 
            views: {
                'main@': {
                    templateUrl:  'app/venta/venta.html',
                    controller:   'VentaController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
