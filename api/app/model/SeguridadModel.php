<?php
namespace App\Model;

use App\Lib\Database;
use App\Lib\Response;

use PDO;

class SeguridadModel
{
    private $db;
    private $table = 'usuarios';
    private $response;
    
    public function __CONSTRUCT()
    {
        $this->db = Database::StartUp();
        $this->response = new Response();
    }
    
    public function Login($usuario, $contrasena)
    {
		try
		{
			$result = array();

			$stm = $this->db->prepare("SELECT * FROM $this->table WHERE nombre = ? AND contrasena= ?");
			$stm->execute(array($usuario, $contrasena));

			$this->response->setResponse(true);
            $this->response->result = $stm->fetch(PDO::FETCH_ASSOC);
            
            return $this->response;
		}
		catch(Exception $e)
		{
			$this->response->setResponse(false, $e->getMessage());
            return $this->response;
		}  
    }

    
}