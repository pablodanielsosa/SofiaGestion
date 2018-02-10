(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.usuarios', {
            url: '/usuarios',
            cache: false,
            data: {pageTitle: 'usuarios'}, 
            views: {
                'main@': {
                    templateUrl:  'app/usuarios/usuarios.html',
                    controller:   'UsuariosController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
