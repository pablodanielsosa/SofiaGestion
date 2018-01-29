(function() {
'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController)
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    HomeController.$inject = ['$scope', '$uibModal', '$uibModalStack', '$log', '$templateCache', 'ApiService'];
    function HomeController($scope, $uibModal, $uibModalStack, $log, $templateCache, ApiService) {
 
        var vm = this;

        vm.items = ['item1', 'item2', 'item3'];
        vm.animationsEnabled = true;
        
        vm.open   = open;  
        
        /*
        ApiService.fcPostRefreshToken().then(function(data) {
            console.log(data);
        }, function(errorReason) {
            fcError();
        });
    
        */      

        function open(size, parentSelector){
            var parentElem = parentSelector ? 
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'vm',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

        };

        $scope.$on("$locationChangeStart", function() {
            $uibModalStack.dismissAll();
        });

    }



    function ModalInstanceCtrl($scope, $uibModalInstance, items){
        var vm = this;
        vm.ok = ok;
        vm.cancel = cancel;

        vm.items = items;
        console.log(items);

        function ok(){
            $uibModalInstance.close(vm.selected.item);
        };

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

    }


})();