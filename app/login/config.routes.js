(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
 
        $stateProvider.state('login', {
            url: '/login',
            cache: false,
            data: {
              pageTitle: 'Login'
            },
            views: {
                'login': {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }

        });
        
    }
  
})();


