(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.home', {
            url: '/',
            cache: false,
            data: {pageTitle: 'Home'}, 
            views: {
                'main@': {
                    templateUrl:  'app/home/home.html',
                    controller:   'HomeController',
                    controllerAs: 'vm'
                }
            }
    
        });

    }
  
})();
