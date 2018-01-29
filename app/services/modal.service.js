(function() {
'use strict';

    angular
        .module('app')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$uibModal'];

    function ModalService($uibModal) {
        
        var modalIsShown = false;
        
        var service = {
            fcOpenModal:fcOpenModal,
            fcCloseModal:fcCloseModal,
            modalIsShown:modalIsShown
        };
        
        return service;
               
        function fcOpenModal(configuracion){
 
           var modalInstance = $uibModal.open({
                templateUrl: configuracion.templateUrl + '?v=' + Date.now,
                controller: configuracion.controller,
                cache: false,
                controllerAs: 'vm',
                backdrop: 'static',
                keyboard: false,
                animation: false,
                size: configuracion.size,
                resolve: {
                    parametros: function () {
                        return angular.copy(configuracion.parametros);
                    }
                }
            });

            return modalInstance;
        };
        
        function fcCloseModal(){
         
        }
        
    }

})();
