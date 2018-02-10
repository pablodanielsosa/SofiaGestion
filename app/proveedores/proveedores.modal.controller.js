(function() {
'use strict';

    angular
        .module('app')
        .controller('ProveedoresModalController', ProveedoresModalController);
        
    ProveedoresModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function ProveedoresModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;
        vm.fcGuardar = fcGuardar;

        //Ejecucion de las funciones
        fcInit();
        

        function fcInit(){

            switch (parametros.accion) {

                case "Editar_Proveedor":
                    vm.titulo = "Editar Proveedor";
                    vm.form = parametros.item;
                    break;
            
                case "Crear_Proveedor":
                    vm.titulo = "Crear Proveedor";
                    break;
            
                default:
                    break;
            }
        };

        function fcGuardar(){


            if(parametros.accion == 'Crear_Proveedor'){

                ApiService.fcPostDataSlim('/proveedores/guardar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

            }else{

                ApiService.fcPostDataSlim('/proveedores/modificar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

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