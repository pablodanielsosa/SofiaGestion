(function() {
'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$log', 'SESSIONS', '$location'];

    function MainController($scope, $log, SESSIONS, $location) {

		fcInit();

		function fcInit(){
			
		}
   
    };


})();