(function() {
'use strict';

    angular
        .module('app')
        .controller('VentaController', VentaController);
        
    VentaController.$inject = ['toastr', '$scope', '$uibModal', '$uibModalStack', '$log', '$templateCache', 'ApiService', 'ModalService', 'MESSAGES'];
    function VentaController(toastr, $scope, $uibModal, $uibModalStack, $log, $templateCache, ApiService, ModalService, MESSAGES) {
 
        var vm = this;
        vm.form = {};

        //Definicion de funciones
        vm.fcGenerarVenta  = fcGenerarVenta;
        vm.fcBuscarProducto = fcBuscarProducto;

        //Ejecucion de las funciones.
        fnInit();

        //Implementacion de las funciones
        function fnInit(){
           
        }

        function fcGenerarVenta(){

           var configuracion = {
               templateUrl: "app/venta/venta.generar.html",
               controller: "VentaModalController",
               parametros: {
                   accion: "Generar_Venta"
               },
               size: ""//lg modal mas grande ver documentacion
           }

           ModalService.fcOpenModal(configuracion).result.then(function (response) {
       
       

           }); 
        }

        
        function fcBuscarProducto(){
            
            var configuracion = {
                templateUrl: "app/venta/venta.buscar.producto.html",
                controller: "VentaModalController",
                parametros: {
                    accion: "Buscar_Producto"
                },
                size: ""//lg modal mas grande ver documentacion
            }

            ModalService.fcOpenModal(configuracion).result.then(function (response) {
        
      

            }); 
        }





    }


})();