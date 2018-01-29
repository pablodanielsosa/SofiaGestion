(function() {
    'use strict';

    angular
        .module('app')
        .directive('ajaxSearchInput', Directive);

    Directive.$inject = ['SESSIONS','$cookies'];

    function Directive(SESSIONS, $cookies) {
        return {
            template: '<input style="margin-left:0px"/>',
            replace: true,
            restrict: 'E',
            require: 'ngModel',
            scope: {
                url: '=',
                selectedItem: '=',
                textAttr: '@',
                queryParam: '@',
                containerCssClass: '@',
                minimumInputLength: '@'
            },

            link: function(_scope, _element) {
                var selectOptions = {
                    minimumInputLength: _scope.minimumInputLength || 3,
                    containerCssClass: _scope.containerCssClass,
                    initSelection: function(_elem, _callback) {
                        if(_scope.selectedItem) {
                            var data = {
                                id: _scope.selectedItem.id,
                                text: _scope.selectedItem[_scope.textAttr] || ''
                            };

                            _callback(data);
                        }
                    },
                    ajax: {
                        url: _scope.url,
                        quietMillis: 250,
                        dataType: 'json',
                         headers: {
                            'Authorization': 'Bearer ' +  sessionStorage.getItem(SESSIONS.TOKEN_SESSION)
                        },
                        data: function(term) {
                            var d = {};
                            d[_scope.queryParam || 'q'] = term;
                            return d;
                        },
                        results: function(_data) {
                            return {
                                results: _.map(_data, function(_item) {
                                    var d = {
                                        id: _item.id,
                                        text: _item[_scope.textAttr]
                                    };

                                    return d;
                                })
                            };
                        }
                    }
                };

                $(_element).select2(selectOptions);
            }
        };
    }
})();