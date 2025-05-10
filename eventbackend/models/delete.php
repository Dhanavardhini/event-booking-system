<?php
include_once '../../../../config/database.php';

class Delete
{
    public $conn;
    public $response;

    // Constructor to initialize the database connection
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
 
    public function eventdelete($id)
{
  
    $id = intval($id);

    
    $deleteQuery = "DELETE FROM `enterbook` WHERE `id`=?";

    // Prepare the SQL statement
    $stmt = mysqli_prepare($this->conn, $deleteQuery);

    // Check if the statement preparation failed
    if ($stmt === false) {
        return ['message' => 'Error preparing statement: ' . mysqli_error($this->conn)];
    }

    // Bind the parameter and execute the statement
    mysqli_stmt_bind_param($stmt, 'i', $id);
    $executeResult = mysqli_stmt_execute($stmt);

    // Check if rows were affected
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        return ['message' => 'success'];
    } else {
        return ['message' => 'not success'];
    }
}
public function functiondelete($id)
{
    
    $id = intval($id);

    // SQL query to delete from the 'twowheelerbook' table where the id matches
    $deleteQuery = "DELETE FROM `funbook` WHERE `id`=?";

    // Prepare the SQL statement
    $stmt = mysqli_prepare($this->conn, $deleteQuery);

    // Check if the statement preparation failed
    if ($stmt === false) {
        return ['message' => 'Error preparing statement: ' . mysqli_error($this->conn)];
    }

    // Bind the parameter and execute the statement
    mysqli_stmt_bind_param($stmt, 'i', $id);
    $executeResult = mysqli_stmt_execute($stmt);

    // Check if rows were affected
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        return ['message' => 'success'];
    } else {
        return ['message' => 'not success'];
    }
}
   
   

    


  
    
   
    
    
    

    

  
   

   


    
    

}
?>