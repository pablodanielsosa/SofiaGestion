
(function() {
    'use strict';

    angular
        .module('app')
        .config(config)
        .config(['$provide', configureTemplateFactory]);

    config.$inject = ['toastrConfig','$locationProvider','$stateProvider', '$urlRouterProvider', '$httpProvider', '$logProvider', 'CONFIG_APP', 'IdleProvider', 'KeepaliveProvider', 'SESSIONS', 'cfpLoadingBarProvider'];
    
    function config(toastrConfig, $locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, $logProvider, CONFIG_APP, IdleProvider, KeepaliveProvider, SESSIONS, cfpLoadingBarProvider) {

        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        cfpLoadingBarProvider.spinnerTemplate = '<div id="pre-load-web"><div class="pre-load-img"><img class="pre-load-img-size" src="content/img/cargando.gif"/></div></div>';

        $httpProvider.defaults.useXDomain = true;

        $logProvider.debugEnabled(CONFIG_APP.LOG_DEBUG);
        $urlRouterProvider.otherwise('/');

        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,    
            newestOnTop: true,
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });

        $stateProvider.state('app',{
            url: '',
            views: {
                'header': {
                    templateUrl: 'app/layout/header.html',
                    controller: 'LayoutController',
                    controllerAs: 'vm'
                },
                'main': {},
                'footer': {
                    templateUrl: 'app/layout/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        });
        
    };


    function configureTemplateFactory($provide) {
        // Set a suffix outside the decorator function 
        var cacheBuster = Date.now().toString();

        function templateFactoryDecorator($delegate) {
            var fromUrl = angular.bind($delegate, $delegate.fromUrl);
            $delegate.fromUrl = function (url, params) {
                
                if (url !== null && angular.isDefined(url) && angular.isString(url)) {
                    url += (url.indexOf("?") === -1 ? "?" : "&");
                    url += "v=" + cacheBuster;
                }

                return fromUrl(url, params);
            };

            return $delegate;
        }

        $provide.decorator('$templateFactory', ['$delegate', templateFactoryDecorator]);
    }

})();
