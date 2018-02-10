(function() {
'use strict';

    angular
        .module('app')
        .controller('MarcasModalController', MarcasModalController);
        
    MarcasModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function MarcasModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;
        vm.fcGuardar = fcGuardar;

        //Ejecucion de las funciones
        fcInit();
        

        function fcInit(){

            switch (parametros.accion) {

                case "Editar_Marca":
                    vm.titulo = "Editar Marca";
                    vm.form = parametros.item;
                    break;
            
                case "Crear_Marca":
                    vm.titulo = "Crear Marca";
                    break;
            
                default:
                    break;
            }
        };

        function fcGuardar(){


            if(parametros.accion == 'Crear_Marca'){

                ApiService.fcPostDataSlim('/marcas/guardar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

            }else{

                ApiService.fcPostDataSlim('/marcas/modificar/', vm.form).then(function (data) {
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