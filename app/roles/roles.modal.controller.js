(function() {
'use strict';

    angular
        .module('app')
        .controller('RolesModalController', RolesModalController);
        
    RolesModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function RolesModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;
        vm.fcGuardar = fcGuardar;

        //Ejecucion de las funciones
        fcInit();
        

        function fcInit(){

            switch (parametros.accion) {

                case "Editar_Rol":
                    vm.titulo = "Editar Rol";
                    vm.form = parametros.item;
                    break;
            
                case "Crear_Rol":
                    vm.titulo = "Crear Rol";
                    break;
            
                default:
                    break;
            }
        };

        function fcGuardar(){


            if(parametros.accion == 'Crear_Rol'){

                ApiService.fcPostDataSlim('/roles/guardar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

            }else{

                ApiService.fcPostDataSlim('/roles/modificar/', vm.form).then(function (data) {
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