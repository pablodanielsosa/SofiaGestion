(function() {
'use strict';

    angular
        .module('app')
        .controller('LogsModalController', LogsModalController);
        
    LogsModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function LogsModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;
        vm.fcGuardar = fcGuardar;

        //Ejecucion de las funciones
        fcInit();
        

        function fcInit(){

            switch (parametros.accion) {

                case "Editar_Log":
                    vm.titulo = "Editar Log";
                    vm.form = parametros.item;
                    break;
            
                case "Crear_Log":
                    vm.titulo = "Crear Log";
                    break;
            
                default:
                    break;
            }
        };

        function fcGuardar(){


            if(parametros.accion == 'Crear_Log'){

                ApiService.fcPostDataSlim('/logs/guardar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

            }else{

                ApiService.fcPostDataSlim('/logs/modificar/', vm.form).then(function (data) {
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