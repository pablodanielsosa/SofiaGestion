(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.marcas', {
            url: '/marcas',
            cache: false,
            data: {pageTitle: 'marcas'}, 
            views: {
                'main@': {
                    templateUrl:  'app/marcas/marcas.html',
                    controller:   'MarcasController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
