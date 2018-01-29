(function() {
'use strict';
    angular
        .module('app')
        .run(runBlock);

        runBlock.$inject = ['$http', '$rootScope',  '$location', '$cookies', 'SESSIONS', '$templateCache', 'AuthorizationService', 'Idle', 'ModalService'];

        function runBlock($http, $rootScope, $location, $cookies, SESSIONS, $templateCache, AuthorizationService, Idle, ModalService) {


            $rootScope.$on('$routeChangeStart', function(evt, next, current) {
                if (ModalService.modalIsShown){
                    ModalService.fcCloseModal();
                    ModalService.modalIsShown = false;
                    evt.preventDefault();
                }
            });

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                        
                if (sessionStorage.getItem(SESSIONS.USER_SESSION) == null) {
                    $location.path('/login');
                }else{
                    var nextpatch  = $location.path();
                    if(nextpatch == '/login'){
                        $location.path('/home');
                    }
                }
             
            })

        }
})();