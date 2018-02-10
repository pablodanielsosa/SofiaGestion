(function() {
'use strict';

    angular
        .module('app')
        .controller('RolesController', RolesController);
        
    RolesController.$inject = ['toastr', '$scope', '$uibModal', '$uibModalStack', '$log', '$templateCache', 'ApiService', 'ModalService', 'MESSAGES'];
    function RolesController(toastr, $scope, $uibModal, $uibModalStack, $log, $templateCache, ApiService, ModalService, MESSAGES) {
 
        var vm = this;
        vm.form = {};

        //Definicion de funciones
        vm.fnCrear  = fnCrear;
        vm.fnEditar = fnEditar;
        vm.fcArmarListaPaginada = fcArmarListaPaginada;
        vm.fcCambiarDePagina = fcCambiarDePagina;
        vm.fcCambiarPaginaSelector = fcCambiarPaginaSelector;
        vm.fcBuscar = fcBuscar;
        vm.fcLimpiar = fcLimpiar;
        vm.fnEliminar = fnEliminar;

        //Ejecucion de las funciones.
        fnInit();

        //Implementacion de las funciones
        function fnInit(){
            fcBuscar();
        }

        function fnEliminar(item){
            if(confirm("¿Estas seguro de eliminar el registro?")){
                ApiService.fcGetDataSlim('/roles/eliminar?id='+item.id_rol).then(function (data) {
                    toastr.success('Exito!', MESSAGES.EXITO);
                    fcBuscar();
                }, function (errorReason) {
                    fcError();
                });
            }
        }

        function fnEditar(item){

           var configuracion = {
               templateUrl: "app/roles/roles.abm.html",
               controller: "RolesModalController",
               parametros: {
                   accion: "Editar_Rol",
                   item:item
               },
               size: ""//lg modal mas grande ver documentacion
           }

           ModalService.fcOpenModal(configuracion).result.then(function (response) {
                
                if(response.estado == "ACTUALIZAR"){
                    fcBuscar();
                }

           }); 
        }

        function fnCrear(){

           var configuracion = {
               templateUrl: "app/roles/roles.abm.html",
               controller: "RolesModalController",
               parametros: {
                   accion: "Crear_Rol"
               },
               size: ""//lg modal mas grande ver documentacion
           }

           ModalService.fcOpenModal(configuracion).result.then(function (response) {
       
                if(response.estado == "ACTUALIZAR"){
                    fcBuscar();
                }         

           }); 
        }

        function fcBuscar(){

            var query = '';

            if(vm.form.descripcion == null){vm.form.descripcion = '';};
  
            query += 'descripcion=' + vm.form.descripcion;
            
            fcArmarListaPaginada('roles',  '/roles/listado/', 1, query);

        };
        
        function fcLimpiar(){
            vm.form.descripcion = null;
            fcBuscar();
        };

        function fcArmarListaPaginada(idElemento, url, page, query){
            
            vm['page_'  + idElemento]  = page;
            vm['url_'  + idElemento]   = url;
            vm['total_'  + idElemento] = 0;
            vm['pages_' + idElemento]  = [];
            vm['query_' + idElemento]  = query;        
            vm['selected_page_' + idElemento] = {name:1,value:1};
            //Ejecutamos la funcion ajax que trae los datos.

            ApiService.fcGetDataSlim(url + page + '?' + query).then(function (data) {

                vm['listado_' + idElemento] = [];
                
                var i = 0;

                vm['total_'  + idElemento] = Math.ceil(parseFloat(data.result.total_count) / parseFloat(data.result.num_items_per_page));

                for (var  e = 1; e <= vm['total_'  + idElemento]; e++) { 
                    var obj = {name: e,value:e};
                    vm['pages_' + idElemento].push(obj);
                };

                vm['selected_page_' + idElemento] = {name:vm['page_'  + idElemento],value:vm['page_'  + idElemento]};

                angular.forEach(data.result.items, function(fish, key) {
                    var obj = fish;
                    i+=1;
                    vm['listado_' + idElemento].push(obj);
                });

            }, function (errorReason) {
                fcError();
            });

        }; 

        function fcCambiarDePagina(accion, idElemento){

            if(accion=='anterior'){
                vm['page_'  + idElemento] = vm['page_'  + idElemento] - 1;
            }else{
                vm['page_'  + idElemento] = vm['page_'  + idElemento] + 1; 
            };

            vm['selected_page_' + idElemento]  = {name:vm['page_'  + idElemento],value:vm['page_'  + idElemento]};

            fcArmarListaPaginada(idElemento, vm['url_'  + idElemento], vm['page_'  + idElemento], vm['query_' + idElemento]);

        };

        function fcCambiarPaginaSelector(idElemento){
            if(vm['selected_page_' + idElemento] != null){
                vm['page_'  + idElemento] = vm['selected_page_' + idElemento].value;           
                fcArmarListaPaginada(idElemento, vm['url_'  + idElemento], vm['page_'  + idElemento], vm['query_' + idElemento]);
            };      
        } 



    }


})();