<?php
use App\Model\SeguridadModel;

$app->group('/seguridad/', function () {

    $this->get('login/{usuario}/{contrasena}', function ($req, $res, $args) {  

        $sm = new SeguridadModel();

        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $sm->Login($args['usuario'], $args['contrasena'])
            )
        );
    });

    
});