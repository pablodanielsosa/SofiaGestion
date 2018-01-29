<?php

    namespace App\Lib;

    use PDO;

    class Database
    {
        public static function StartUp()
        {
            $pdo = new PDO('mysql:host=localhost;dbname=sofia', 'sofia', 'sofia');
            
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
            return $pdo;
        }
    }

?>