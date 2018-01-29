<?php
use App\Model\CategoriasModel;

$app->group('/categorias/', function () {

    $this->get('eliminar', function ($req, $res, $args) {

        $um = new CategoriasModel();

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
        
        $um = new CategoriasModel();
        $w = '';
        $o = ' ORDER BY descripcion ASC';

        if(isset($_GET['descripcion']) && $_GET['descripcion']!="")
        {
            $where[] = "descripcion LIKE '%".$_GET['descripcion']."%'";
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
        
        $um = new CategoriasModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Guardar($req->getParsedBody())
            )
        );
    });

    $this->post('modificar/', function ($req, $res, $args) {
        
        $um = new CategoriasModel();

        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
            json_encode($um->Modificar($req->getParsedBody())
            )
        );
    });
 
});