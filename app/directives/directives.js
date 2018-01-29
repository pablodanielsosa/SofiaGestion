(function() {
    'use strict';

    angular
        .module('app')
        .directive('loading', loading)
        .directive('compile', compile)
        .directive('updateTitle', updateTitle)
        .directive('messages', messages)
        .directive('capitalize', capitalize)
        .directive('validateCuit', validateCuit)
        .directive('ngEnter', ngEnter)
        .directive('ngPrint', ngPrint)
        .directive('datePickerOpen', datePickerOpen);
        

    function datePickerOpen(){

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attr, ngModel) {
 
            element = $(element);
            element.datetimepicker({     
                format: 'DD/MM/YYYY'
            });
            element.on('dp.change', function(event) {
                scope.$apply(function() {
                    ngModel.$setViewValue(moment(event.date).format("DD/MM/YYYY"));
                });
            });

            element.inputmask("99/99/9999",{ "placeholder": "_" });

        };

    };


    //Directiva para validar el cuit
    function validateCuit(){

        var directive = {
            require: 'ngModel',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs, modelCtrl) {
 
            var value = function(inputValue) {
     
                var sCUIT = inputValue;
                var r     = false;

                var aMult = '5432765432'; 
                var aMult = aMult.split(''); 
                
                var aMult   = '6789456789'; 
                var aMult   = aMult.split(''); 
                var sCUIT   = String(sCUIT); 
                var iResult = 0; 
                var aCUIT = sCUIT.split(''); 
                
                if (aCUIT.length == 11) 
                { 
                    // La suma de los productos 
                    for(var i = 0; i <= 9; i++) 
                    { 
                        iResult += aCUIT[i] * aMult[i]; 
                    } 
                    // El módulo de 11 
                    iResult = (iResult % 11); 
                    
                    // Se compara el resultado con el dígito verificador 
                    r =  (iResult == aCUIT[10]); 
                }     

                modelCtrl.$setValidity('cuit', r);
     
                return sCUIT;
            };

            modelCtrl.$parsers.push(value);
      
        };

    };

   function ngPrint() {

         var directive = {
            restrict: 'E',
            scope: {
              print: "="
            },
            link: linkFunc
          };

        return directive;

        function linkFunc(scope, element, attr) {
            scope.$watch('print', function (val) {
                if (val)
                    $('.print').printArea();
            });
        }
    };

    //DIRECTIVA PARA DETECTAR EL EVENTO ENTER
    function ngEnter() {
        return {
        restrict: 'A',
        link: function(scope, elements, attrs) {
            elements.bind('keydown keypress', function (event) {

                if (event.which === 13) {
                    scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }
        };
    };



    function loading() {

        var directive = {
            restrict: 'E',
            scope: {
              loading: "="
            },
            link: linkFunc,
            template: "<div id='pre-load-web'></div>"
          };

        return directive;

        function linkFunc(scope, element, attr) {
            scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    }

    compile.$inject = ['$compile'];

    function compile($compile){

        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    return scope.$eval(attrs.compile);
                },
                function(value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                    $.AdminLTE.layout.fix();
                    $.AdminLTE.layout.fixSidebar();
                }
            );
        };


    }

    updateTitle.$inject = ['$rootScope', '$timeout'];

    function updateTitle($rootScope, $timeout){

        return {
          link: function(scope, element) {

            var listener = function(event, toState) {

              var title = 'Default Title';
              if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

              $timeout(function() {
                element.text(title);
              }, 0, false);

            };

            $rootScope.$on('$stateChangeSuccess', listener);
          }
        };

    }


    function messages(){

        var directive = {
            restrict: 'E',
            scope: {
              code: "="
            },
            link: linkFunc,
            templateUrl: "app/directives/templates/alerts.html"
          };

        return directive;

        function linkFunc(scope, element, attr) {
            scope.$watch('code', function (val) {
                console.log(val);
                if(val == "ok"){
                    $("#message_ok").show();
                };
                if(val == "error"){
                    $("#message_error").show();
                }
            });
        }

    };


    function capitalize(){

        var directive = {
            require: 'ngModel',
            link: linkFunc
          };

        return directive;

        function linkFunc(scope, element, attrs, modelCtrl) {
 
            var capitalize = function(inputValue) {
                if (inputValue == undefined) inputValue = '';
                var capitalized = inputValue.toUpperCase();
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]); // capitalize initial value


        }

    };

    
    angular
        .module("app")
        .directive('enter',function(){
        return function(scope,element,attrs){
            element.bind("keydown keypress",function(event){
                if(event.which===13){
                    event.preventDefault();
                    var fields=$(this).parents('form:eq(0)').find('input, textarea, select, button');
                    var index=fields.index(this);
                    if(index> -1&&(index+1)<fields.length)
                        fields.eq(index+1).focus();
                }
            });
        };
    });
        
    angular
        .module("app")
        .directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9]/g, '');

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        return transformedInput;
                    }
                    return undefined;
                }            
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    });

    angular
        .module("app")
        .directive('imagenFile' , function() {
            return {
                link: function(scope, element, attrs) {
                    
                    $(element).change(function () {
                        readURL(this, 'imagen_file_img');
                        $('#label_imagen_file').text(this.value.replace(/C:\\fakepath\\/i, ''));
                    });

                    function readURL(input, id) {
                        if (input.files && input.files[0]) {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                $('#' + id).attr('src', e.target.result);
                            };      
                            reader.readAsDataURL(input.files[0]);
                        };
                    };
                }
            }
    });

    angular
        .module("app")
        .directive('firmaFile' , function() {
            return {
                link: function(scope, element, attrs) {
                    
                    $(element).change(function () {
                        readURL(this, 'firma_file_img');
                        $('#label_firma_file').text(this.value.replace(/C:\\fakepath\\/i, ''));
                    });

                    function readURL(input, id) {
                        if (input.files && input.files[0]) {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                $('#' + id).attr('src', e.target.result);
                            };      
                            reader.readAsDataURL(input.files[0]);
                        };
                    };
                }
            }
    });

angular
    .module("app")
    .directive('validInteger', function() {
            return {
                require: '?ngModel',
                link: function(scope, element, attrs, ngModelCtrl) {
                if(!ngModelCtrl) {
                    return; 
                }

                ngModelCtrl.$parsers.push(function(val) {
                    if (angular.isUndefined(val)) {
                        var val = '';
                    }
                    var clean = val.replace( /[^0-9]+/g, '');
                    if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                    }
                    return clean;
                });

                element.bind('keypress', function(event) {
                    if(event.keyCode === 32) {
                    event.preventDefault();
                    }
                });
                }
            };
    });

  angular
    .module("app")
        .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    });


    
    angular
    .module("app")
    .directive('validDecimal', function() {
        return {
            require: '?ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return; 
            }

            ngModelCtrl.$parsers.push(function(val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }
                
                var clean = val.replace(/[^-0-9\.]/g, '');
                var negativeCheck = clean.split('-');
                var decimalCheck = clean.split('.');
                if(!angular.isUndefined(negativeCheck[1])) {
                    negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                    clean =negativeCheck[0] + '-' + negativeCheck[1];
                    if(negativeCheck[0].length > 0) {
                        clean =negativeCheck[0];
                    }
                    
                }
                
                if(!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0,2);
                    clean =decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                ngModelCtrl.$setViewValue(clean);
                ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                event.preventDefault();
                }
            });
            }
        };
        });





  
})();
