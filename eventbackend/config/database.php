<?php
class Database
{
  private $servername = "localhost";
  private $port="3310";
  private $username = "root";
  private $password = "";
  private $dbname = "eventbook";
  private $conn;

 

  public function connect()
  {
    $this->conn = null;
    // Create connection
    $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname,$this->port);
    // Check connection
    if ($conn->connect_error) {

      die("Connection failed: " . $conn->connect_error);

    } else {
      return $conn;
    }

  }
  public function getDbName()
  {
      return $this->dbname;
  }

}



?>