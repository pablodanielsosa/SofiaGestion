<?php
use App\Model\ConsultasModel;

$app->group('/consultas/', function () {

    $this->get('eliminar', function ($req, $res, $args) {

        $um = new ConsultasModel();

        $id = $_GET['id'];

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Eliminar($id)
            )
        );
        
    });

    $this->get('listado', function ($req, $res, $args) {

        $um = new ConsultasModel();
        
        $id_usuario = $_GET['id_usuario'];
        $id_sucursal = $_GET['id_sucursal'];

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->TraerListadoByUsuarioYSucursal($id_usuario, $id_sucursal)
            )
        );
    });

    $this->post('guardar/', function ($req, $res, $args) {
        
        $um = new ConsultasModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Guardar($req->getParsedBody())
            )
        );
    });

    $this->post('modificar/', function ($req, $res, $args) {
        
        $um = new ConsultasModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Modificar($req->getParsedBody())
            )
        );
    });
 
});