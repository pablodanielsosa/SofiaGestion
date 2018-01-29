<?php
namespace App\Model;

use App\Lib\Database;
use App\Lib\Response;

use PDO;

class ConsultasModel
{
    private $db;
    private $table = 'consultas';
    private $response;
    private $filas_por_pagina = 10;
    
    public function __CONSTRUCT()
    {
        $this->db = Database::StartUp();
        $this->response = new Response();
    }

       
    public function Eliminar($id)
    {
        
        try
        {
    
            $sql = "DELETE FROM $this->table WHERE id_consulta = " . $id;
            $this->db->prepare($sql)->execute();
            $this->response->result = 'ok';
            $this->response->setResponse(true);
            return $this->response;
            
        }
        catch(Exception $e)
        {
            $this->response->setResponse(false, $e->getMessage());
            return $this->response;
        }
        
        
    }//fin guardar
     
    public function TraerListadoByUsuarioYSucursal($id_usuario,$id_sucursal)
    {
        
        try
        {
            //Si bien trae lo que esta guardado tenemos que tener cuidado con el precio.
            //Tenemos que definir una duracion de esta bandeja que va a contener los precios cargados.
            //en el momento de la venta.
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

    public function Modificar($data)
    {
        
        try
        {
                       
            $sql = "UPDATE $this->table  SET
                          id_producto= ?,
                          id_sucursal= ?,
                          id_usuario= ?,
                          cantidad= ?,
                          precio= ?,
                          codigo= ?
                    WHERE id_consulta = ?";
            
            $this->db->prepare($sql)
            ->execute(
                array(
                    $data['id_producto'],
                    $data['id_sucursal'],
                    $data['id_usuario'],
                    $data['cantidad'],
                    $data['precio'],
                    $data['codigo'],
                    $data['id_consulta']
                )
            );
            
            $this->response->result = 'ok';
            $this->response->setResponse(true);
            return $this->response;
            
        }
        catch(Exception $e)
        {
            $this->response->setResponse(false, $e->getMessage());
            return $this->response;
        }
        
        
    }//fin modificar
    
    public function Guardar($data)
    {
        
        try
        {
                   
            $sql = "INSERT INTO $this->table
                (id_producto,
                id_sucursal,
                id_usuario,
                cantidad,
                precio,
                codigo)
            VALUES (?,?,?,?,?,?)";
            
            $this->db->prepare($sql)
            ->execute(
                array(
                    $data['id_producto'],
                    $data['id_sucursal'],
                    $data['id_usuario'],
                    $data['cantidad'],
                    $data['precio'],
                    $data['codigo']
                )
            );
            
                 
            $this->response->result = 'ok';
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