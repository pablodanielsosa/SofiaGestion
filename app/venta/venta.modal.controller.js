(function() {
'use strict';

    angular
        .module('app')
        .controller('VentaModalController', VentaModalController);
        
    VentaModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function VentaModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;

        //Ejecucion de las funciones
        fcInit();
        

        function fcInit(){

            switch (parametros.accion) {

                case "Editar_Categoria":
                    vm.titulo = "Editar Categoria";
                    vm.form = parametros.item;
                    break;
            
                case "Crear_Categoria":
                    vm.titulo = "Crear Categoria";
                    break;
            
                default:
                    break;
            }
        };




   
        function fcError() {
            toastr.error(MESSAGES.ERROR_GENERIC, 'Error');
        };

        function fcSalir(){
            $uibModalInstance.close({});
        };

        
    }


})();