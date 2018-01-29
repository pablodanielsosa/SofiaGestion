(function() {
'use strict';

    angular
        .module('app')
        .controller('CategoriasModalController', CategoriasModalController);
        
    CategoriasModalController.$inject = ['$scope', '$uibModalInstance', 'parametros', 'ApiService', 'toastr', 'MESSAGES'];
    function CategoriasModalController($scope, $uibModalInstance, parametros, ApiService, toastr, MESSAGES) {
        
        var vm = this;
        vm.form = {};


        //Definicion de funciones
        vm.fcSalir = fcSalir;
        vm.fcGuardar = fcGuardar;

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

        function fcGuardar(){


            if(parametros.accion == 'Crear_Categoria'){

                ApiService.fcPostDataSlim('/categorias/guardar/', vm.form).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    $uibModalInstance.close({ estado: 'ACTUALIZAR', action: vm.action });
                }, function (errorReason) {
                    fcError();
                });

            }else{

                ApiService.fcPostDataSlim('/categorias/modificar/', vm.form).then(function (data) {
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