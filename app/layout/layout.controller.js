(function() {
'use strict';

    angular
        .module('app')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$scope', '$log', '$cookies', 'SESSIONS', 'CONFIG_APP', '$location', '$interval', 'IntervalService', 'Idle'];
    function LayoutController($scope, $log, $cookies, SESSIONS, CONFIG_APP, $location, $interval, IntervalService, Idle) {

        var vm        = this;
        var stop;
        
        //Variables
        vm.menulist        = [];
        vm.menu            = '';
        vm.user_session    = '';

        vm.title_app       = CONFIG_APP.TITLE_APP;
        vm.url_avatar      = CONFIG_APP.APP_URL_AVATAR;
        vm.abbreviation    = CONFIG_APP.APP_ABBREVIATION;
        vm.app_name_a      = CONFIG_APP.APP_NAME_A;
        vm.app_name_b      = CONFIG_APP.APP_NAME_B;
        vm.app_empresa     = CONFIG_APP.APP_EMPRESA;
        vm.app_developers  = CONFIG_APP.APP_DEVELOPERS;
  
        //Funciones
        vm.fcMenuList          = fcMenuList;
        vm.fcSetClassView      = fcSetClassView;
        vm.fcSetClickMenu      = fcSetClickMenu;
        vm.fcCheckSingleSignOn = fcCheckSingleSignOn;
        vm.fcSetMenuSelected = fcSetMenuSelected;

        //Inicializamos
        fcInit();

        //Implementacion
        function fcCheckSingleSignOn(){
            IntervalService.fcStartControlApp();
        };
                
        function fcInit(){
            vm.user_session = JSON.parse(sessionStorage.getItem(SESSIONS.USER_SESSION)).nombre;
            fcMenuList();
            fcSetClassView();
        };
        
        function fcMenuList() { 

            var html = '';
            
            var item = {
                id: 1,
                title: 'Munú',
                active: true,
                menu_items: [

                    {id: 1, title: 'Gestión', url: 'gestion', etiqueta: 'gestion' , icon: '', active: true,
                     sub_items:[
                         {id: 8, title: 'Generar Venta', url: 'venta' , etiqueta: 'venta' , icon: '', active: true}
                    ]},
                    
                    {id: 1, title: 'Administración', url: 'administracion', etiqueta: 'administracion' , icon: '', active: true,
                     sub_items:[
                         {id: 1, title: 'Productos', url: 'productos' , etiqueta: 'productos' , icon: '', active: true},
                         {id: 2, title: 'Categorias',  url: 'categorias' , etiqueta: 'categorias' , icon: '', active: true}
                    ]}
                ]
            }//fin items
            

            vm.menulist.push(item);

            angular.forEach(vm.menulist, function(t, key) {

                if(t.active){

                    html += '<li class="header">'+t.title+'</li>';

                    angular.forEach(t.menu_items, function(mi, key) {

                        if(mi.active){

                            var active = '';

                            if(mi.title == sessionStorage.getItem('MENU_SELECTED')){
                                active = 'active';
                            };

                            html += '<li class="treeview '+active+'">';
                                var fcMenu = "vm.fcSetMenuSelected('" + mi.title + "')";
                                html += '<a href="javascript:;" ng-click="'+fcMenu+'" >';
                                    html += '<i class=""></i>';
                                    html += '<span>'+mi.title+'</span>';
                                    html += '<span class="pull-right-container">';
                                    html += '<i class="fa fa-angle-left pull-right"></i>';
                                    html += '</span>';
                                html += '</a>';
                                
                            
                                html += '<ul class="treeview-menu">';

                                angular.forEach(mi.sub_items, function(si, key) {

                                    if(si.active){

                                        html += '<li class="cerramos-formulario">';
                                            html += '<a ui-sref="app.'+si.url+ '" ui-sref-opts="{reload: true}" ng-click="vm.fcSetClickMenu()">'+si.title+ '</a>';
                                        html += '</li>';

                                    };

                                });

                                html += '</ul>';

                            html += '</li>';

                        };

                    });
                    
                };


            });
 
            vm.menu = html;
    
        };

        function fcSetClassView(){
          $('body').addClass('hold-transition fixed skin-blue sidebar-mini');
          $('#div-wrapper').css('display','');
        }

        function fcSetClickMenu(){
            angular.element('.content-wrapper').triggerHandler('click');
        };

        function fcSetMenuSelected(menuSelected){
            $log.debug('menu->' + menuSelected);
            sessionStorage.setItem('MENU_SELECTED', menuSelected);
        }
        
        $scope.$on('$destroy', function (event) {
           
        });

    }
})();