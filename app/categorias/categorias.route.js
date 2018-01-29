(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.categorias', {
            url: '/categorias',
            cache: false,
            data: {pageTitle: 'categorias'}, 
            views: {
                'main@': {
                    templateUrl:  'app/categorias/categorias.html',
                    controller:   'CategoriasController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
