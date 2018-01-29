(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONFIG_APP'];
    
    function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, CONFIG_APP) {
        
        $stateProvider.state('app.logout', {
            url: '/logout',
            views: {
                'main@': {
                    templateUrl: 'app/logout/logout.html',
                    controller: 'LogoutController'
                }
            }
    
        });

    }
  
})();
