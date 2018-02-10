<!DOCTYPE html>
<html lang="es" ng-app="app" ng-controller="MainController as vm">
<head>
    
    <meta charset="UTF-8">

    <link rel="icon" href="content/img/favicon.ico" sizes="32x32" />
    <link rel="icon" href="content/img/favicon.ico" sizes="192x192" />

    <title update-title>Sofia Gestion</title>
        
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- /******/CSS/***** -->
    <!-- ***************** --> 
    <link rel="stylesheet" href="content/css/bootstrap/css/bootstrap.min.css?v=1.0">
    <link rel="stylesheet" href="content/css/font-awesome.min.css">
    <link rel="stylesheet" href="content/css/ionicons.min.css">
    <link rel="stylesheet" href="content/css/select2.min.css">
    <link rel="stylesheet" href="libraries/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="libraries/dist/css/skins/skin-blue.min.css">
    <link rel="stylesheet" href="content/css/jquery-ui.css">
    <link rel="stylesheet" href="content/css/jquery.bracket.min.css">
    <link rel="stylesheet" href="content/css/ng-table.min.css">
    <link rel="stylesheet" href="content/css/bootstrap-datetimepicker.css">
    <link rel="stylesheet" href="content/css/angular-toastr.css">   
    <link rel="stylesheet" href="content/css/ngProgress.css">
    <link rel="stylesheet" href="content/css/PrintArea.css">
    <link rel="stylesheet" href="libraries/plugins/bar/loading-bar.min.css">
    <link rel="stylesheet" href="content/css/styles.css?v=<?php echo uniqid(); ?>">
        
</head>

<body>
    
    <div id="nav-soporte" ng-if="false" class="nav-soporte">
        Navegador no soportado por la aplicación.
    </div>

        
    <div id="loading-bar-container"></div>
 
    <!--Template page login-->
    <div ui-view="login"></div> 

    <!--Template pages-->
    <div id="div-wrapper" style="display:none" class="wrapper">
        <div ui-view="header"></div> 
        <div class="content-wrapper">
            <div ui-view="main"></div>          
        </div>
        <div ui-view="footer"></div> 
    </div>


    <!-- /******/SCRIPTS/***** -->
    <!-- ********************* -->    
    <script src="libraries/libs/jquery-1.12.4.js"></script>
    <script src="libraries/libs/jquery-ui.js"></script>   
    <script src="libraries/libs/jquery.bracket.min.js"></script>   
    <script src="content/css/bootstrap/js/bootstrap.min.js"></script>
    <script src="libraries/plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <script src="libraries/dist/js/app.js"></script>    
    <script src="libraries/plugins/input-mask/jquery.inputmask.js"></script>
    <script src="libraries/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
    <script src="libraries/plugins/input-mask/jquery.inputmask.extensions.js"></script>
    <script src="libraries/plugins/select2/select2.full.min.js"></script>

    <script src="libraries/libs/jquery.PrintArea.js"></script>
    
    <!--Angular-->
    <script src="libraries/libs/angular.min.js"></script>
    <script src="libraries/libs/angular-animate.js"></script>
    <script src="libraries/libs/angular-ui-router.js"></script>
    <script src="libraries/plugins/uibootstrap/ui-bootstrap-tpls-2.3.0.min.js"></script>
    <script src="libraries/libs/angular-cookies.js"></script>
    <script src="libraries/libs/angular-messages.js"></script>
    <script src="libraries/libs/angular-md5.js"></script>
    <script src="libraries/libs/ng-table.min.js"></script>
    <script src="libraries/libs/angular-sanitize.js"></script>
    <script src="libraries/plugins/moment/moment.js"></script>
    <script src="libraries/plugins/moment/es.js"></script>
    <script src="libraries/plugins/moment/angular-momentjs.js"></script>
    <script src="libraries/plugins/inactiviti/activity-monitor.js"></script>
    <script src="libraries/libs/ng-file-model.js"></script>
    <script src="libraries/libs/select2.js"></script>
    <script src="libraries/libs/angular-idle.min.js"></script>
    <script src="libraries/libs/angular-toastr.tpls.js"></script>
    <script src="libraries/libs/ngProgress.js"></script>
    <script src="libraries/libs/ngPrint.js"></script>
    <script src="libraries/libs/daterangepicker.min.js"></script>
    <script src="libraries/libs/angular-daterangepicker.min.js"></script>
    <script src="libraries/libs/bootstrap-datetimepicker.js"></script>
    <script src="libraries/plugins/bar/loading-bar.min.js"></script>

    <!--Modules-->
    <script src="app/app.modules.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/app.runs.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/app.routes.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/app.constants.js?v=<?php echo uniqid(); ?>"></script>

    <!--Services-->
    <script src="app/services/data.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/main.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/providers/version.provider.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/directives/directives.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/directives/select2.directive.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/authorization.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/util.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/interval.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/progressbar.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/keyboardManager.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/filters.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/api.service.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/services/modal.service.js?v=<?php echo uniqid(); ?>"></script>


    <!--main-->
    <script src="app/main/main.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--layout-->
    <script src="app/layout/layout.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/layout/footer.controller.js?v=<?php echo uniqid(); ?>"></script>
    
    <!--login-->
    <script src="app/login/config.routes.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/login/login.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--home-->
    <script src="app/home/config.routes.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/home/home.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--logout-->
    <script src="app/logout/config.routes.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/logout/logout.controller.js?v=<?php echo uniqid(); ?>"></script>


    <!--categorias-->
    <script src="app/categorias/categorias.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/categorias/categorias.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/categorias/categorias.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--proveedores-->
    <script src="app/proveedores/proveedores.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/proveedores/proveedores.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/proveedores/proveedores.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--usuarios-->
    <script src="app/usuarios/usuarios.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/usuarios/usuarios.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/usuarios/usuarios.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--marcas-->
    <script src="app/marcas/marcas.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/marcas/marcas.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/marcas/marcas.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--venta-->
    <script src="app/venta/venta.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/venta/venta.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/venta/venta.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--roles-->
    <script src="app/roles/roles.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/roles/roles.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/roles/roles.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

    <!--logs-->
    <script src="app/logs/logs.route.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/logs/logs.controller.js?v=<?php echo uniqid(); ?>"></script>
    <script src="app/logs/logs.modal.controller.js?v=<?php echo uniqid(); ?>"></script>

   
    <script>
        $( document ).ready(function() {
            $("#nav-soporte").css('display','block');
        });     
    </script>

</body>


</html>