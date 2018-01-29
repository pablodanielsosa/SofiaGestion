(function() {
'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$window','$scope', '$location','ApiService', '$cookies', 'md5', 'SESSIONS', 'CONFIG_APP', '$log', 'MESSAGES', 'IntervalService', 'toastr', 'ngProgressFactory', '$timeout', 'Idle'];

    function LoginController($window, $scope, $location, ApiService, $cookies, md5, SESSIONS, CONFIG_APP, $log, MESSAGES, IntervalService, toastr, ngProgressFactory, $timeout, Idle) {
        
        var vm = this;

        vm.login           = {};
        vm.alert           = {};
        vm.grupos          = [];
        vm.loading         = false;   
        vm.fnEntrar       = fnEntrar;
        vm.fcSetClassView  = fcSetClassView;
        vm.viewlogin       = true;
        vm.viewgroup       = false;
        vm.CONFIG_APP = CONFIG_APP;
        
        
        init();
        
        function init(){

            angular.element(document).ready(function () {
                $(".user").focus();
            });
        
        };


        function fnEntrar(){
            
            ApiService.fcGetDataSlim('/seguridad/login/'+vm.login.user+'/'+vm.login.password+'').then(function(data) {
                
                if(data.result != false){
                    sessionStorage.setItem(SESSIONS.USER_SESSION,  JSON.stringify(data.result));
                    $location.path('/');
                }else{
                    fcError();
                };

            }, function(error) {
                fcError();
            });
            

        };

        function fcAlert(active, cclass, message){
            vm.alert.active   = active;
            vm.alert.class    = cclass;
            vm.alert.message  = message;
        };
        
        function fcError(){
            fcAlert(true, 'alert alert-danger', MESSAGES.ERROR_GENERIC_LOGIN);
        }

        function fcSetClassView(){
            $('body').addClass('hold-transition login-page');
            $('#div-wrapper').css('display','none');
        };

    }
})();