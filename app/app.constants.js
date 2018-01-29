(function() {
    'use strict';

    angular
        .module('app')
        .constant('CONFIG_APP', {
            APP_VERSION       : '1.0',
            APP_DISABLED      : false,
            TIME_CHECK_SINGLE : 5000,
            TITLE_APP         : 'Sofia Gestión',
            TITLE_LOGIN       : 'Sofia Gestión',
            SUBTITLE_LOGIN    : 'Sofia Gestión',
            URL_LOGO_LOGIN    : 'content/img/logoFuncional.png',
            APP_NAME_A        : 'Sofia Gestión',
            APP_EMPRESA       : 'PS Desarrollos',
            APP_NAME_B        : 'Sofia Gestión',
            APP_DEVELOPERS    : 'PS Desarrollos',
            APP_ABBREVIATION  : 'SG',
            APP_COLOR         : 'blue',
            APP_SCROLL_FORM_TIME: '200',
            APP_URL_AVATAR    : 'libraries/dist/img/user2-160x160.jpg',
            URL_BASE_API      : 'api/public/index.php'
        })
        .constant('SESSIONS', {
        	USER_SESSION : 'USER_SESSION',
            TOKEN_SESSION: 'TOKEN_SESSION',
            TIMEOUT_SESSION: '1800',
            CLOSE_BY_INACTIVITY: 2400,
            TOKEN_REFRESH: 'TOKEN_REFRESH',
            DATE_CONTROL: 'DATE_CONTROL',
            APP_DATE_IN: 'APP_DATE_IN',
            TIME_APP_AUTHORIZATION: 8
        })
        .constant('APP_IDS_DEFAULT', {
            
            
        })
        .constant('AFIP', {

        })
        .constant('MESSAGES', {
            ERROR_AFIP: 'Fallo en Conexión Externa.',
            ERROR_CONSTANCIA_AFIP: 'No se puede descargar la constancia.',
            CONTRIBUYENTE_EXISTENTE: 'Contribuyente existente.',
            INICIO_LOGIN: 'Inicio de sesion correcto.',
            LOGIN_ERROR: 'Credenciales incorrectas.',
            ERROR_GENERIC: 'Error al intentar ejecutar la accion.',
            EXITO: 'Accion generada correctamente.',
            ERROR_PANDOR: 'Error critico el sistema puede estar inestable por mas de 24hs.',
            ERROR_PINO: 'Error fatal su sistema no sirve mas.',
            MESSAGE_DELETE: 'Realmente quieres eliminar el registro?',
            ERROR_GENERIC_LOGIN: 'Verifique los datos ingresados.',
            ERROR_LOAD_MODAL: 'La pantalla no esta disponible por problemas de conexion con el servidor.'
        });
})();
