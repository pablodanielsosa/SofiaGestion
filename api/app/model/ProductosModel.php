<?php
namespace App\Model;

use App\Lib\Database;
use App\Lib\Response;

use PDO;

class ProductosModel
{
    private $db;
    private $table = 'productos';
    private $response;
    private $filas_por_pagina = 10;
    
    public function __CONSTRUCT()
    {
        $this->db = Database::StartUp();
        $this->response = new Response();
    }

    public function Buscar($id_usuario,$id_sucursal)
    {
        
        try
        {
            $sql = "SELECT * FROM $this->table WHERE id_usuario = " . $id_usuario . " AND id_sucursal = " .  $id_sucursal;
            $stm = $this->db->prepare($sql);
            $stm->execute();
            $items = $stm->fetchAll(PDO::FETCH_ASSOC);
            $this->response->result = $items;
            $this->response->setResponse(true);
            return $this->response;
            
        }
        catch(Exception $e)
        {
            $this->response->setResponse(false, $e->getMessage());
            return $this->response;
        }
        
        
    }//fin guardar

  
        
}