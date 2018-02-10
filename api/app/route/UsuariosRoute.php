<?php
use App\Model\UsuariosModel;

$app->group('/usuarios/', function () {

    $this->get('eliminar', function ($req, $res, $args) {

        $um = new UsuariosModel();

        $id = $_GET['id'];

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Eliminar($id)
            )
        );
        
    });

    $this->get('listado/{page}', function ($req, $res, $args) {

        $where = array();
        
        $um = new UsuariosModel();
        $w = '';
        $o = ' ORDER BY nombre ASC';

        if(isset($_GET['nombre']) && $_GET['nombre']!="")
        {
            $where[] = "nombre LIKE '%".$_GET['nombre']."%'";
        };

        if(Count($where) > 0){
            $w .= " WHERE ". implode(" AND ", $where);
        };

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Listado($args['page'], $w, $o)
            )
        );
    });

    $this->post('guardar/', function ($req, $res, $args) {
        
        $um = new UsuariosModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Guardar($req->getParsedBody())
            )
        );
    });

    $this->post('modificar/', function ($req, $res, $args) {
        
        $um = new UsuariosModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Modificar($req->getParsedBody())
            )
        );
    });
 
});