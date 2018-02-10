<?php
namespace App\Model;

use App\Lib\Database;
use App\Lib\Response;

use PDO;

class ProveedoresModel
{
    private $db;
    private $table = 'proveedores';
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
    
            $sql = "DELETE FROM $this->table WHERE id_proveedor = " . $id;
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
     
    
    public function Modificar($data)
    {
        
        try
        {
                       
            $sql = "UPDATE $this->table  SET
                          nombre= ?,
                          numero_contacto= ?,
                          email= ?,
                          direccion= ?
                    WHERE id_proveedor = ?";
            
            $this->db->prepare($sql)
            ->execute(
                array(
                    $data['nombre'],
                    $data['numero_contacto'],
                    $data['email'],
                    $data['direccion'],
                    $data['id_proveedor']
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
            (nombre, numero_contacto, email, direccion)
            VALUES (?,?,?,?)";
            
            $this->db->prepare($sql)
            ->execute(
                array(
                    $data['nombre'],
                    $data['numero_contacto'],
                    $data['email'],
                    $data['direccion']
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
    

    
    public function Listado($page,$where,$orderBy)
    {
            try
            {

                $result = array();
                $inicio = ($page - 1) * $this->filas_por_pagina;
                $sql = "SELECT * FROM $this->table " .$where. "  " .$orderBy." LIMIT ".$inicio.", ".$this->filas_por_pagina."";
                $stm = $this->db->prepare($sql);
                $stm->execute();
                $items = $stm->fetchAll(PDO::FETCH_ASSOC);

                $stm = $this->db->prepare("SELECT count(*)  as count FROM $this->table  " .$where);
                $stm->execute();
                $count = $stm->fetch();
            
                $this->response->setResponse(true);

                $json_result = array('items' => $items, 
                                    'total_count' => $count['count'], 
                                    'num_items_per_page' => $this->filas_por_pagina);

                $this->response->result = $json_result;
                
                return $this->response;


            }
            catch(Exception $e)
            {
                $this->response->setResponse(false, $e->getMessage());
                return $this->response;
            }  
    }
    

    
    
}