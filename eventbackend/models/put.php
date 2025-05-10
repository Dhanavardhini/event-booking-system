<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

  

    public function enterbook($id, $name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status)
    {
        // Ensure $id is an integer
        $id = (int)$id;
    
        // Check the database connection
        if (!$this->conn) {
            die("Database connection error: " . mysqli_connect_error());
        }
    
        // Check if the booking exists
        $checkUserQuery = "SELECT * FROM enterbook WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die("Query preparation failed: " . mysqli_error($this->conn));
        }
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); // Bind the integer ID
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        // If the booking exists, update it
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "
                UPDATE enterbook
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    event = ?, 
                    tickets = ?, 
                    event_date = ?, 
                    time = ?, 
                    payment = ?, 
                    price = ?, 
                    status = ?
                WHERE 
                    id = ?
            ";
    
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            if (!$updateStmt) {
                die("Update query preparation failed: " . mysqli_error($this->conn));
            }
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "ssssssssssi", // Corrected data types (10 parameters)
                $name,
                $email,
                $phone,
                $event, // Corrected variable name
                $tickets,
                $event_date, // Corrected variable name
                $time,
                $payment,
                $price,
                $status,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "Booking details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating booking details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }
    
    
    

    
   
    
    public function functionbook($id, $name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status)
    {
        // Ensure $id is an integer
        $id = (int)$id;
    
        // Check the database connection
        if (!$this->conn) {
            die("Database connection error: " . mysqli_connect_error());
        }
    
        // Check if the booking exists
        $checkUserQuery = "SELECT * FROM funbook WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die("Query preparation failed: " . mysqli_error($this->conn));
        }
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); // Bind the integer ID
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        // If the booking exists, update it
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "
                UPDATE funbook
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    event = ?, 
                    tickets = ?, 
                    event_date = ?, 
                    time = ?, 
                    payment = ?, 
                    price = ?, 
                    status = ?
                WHERE 
                    id = ?
            ";
    
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            if (!$updateStmt) {
                die("Update query preparation failed: " . mysqli_error($this->conn));
            }
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "ssssssssssi", // Corrected data types (10 parameters)
                $name,
                $email,
                $phone,
                $event, // Corrected variable name
                $tickets,
                $event_date, // Corrected variable name
                $time,
                $payment,
                $price,
                $status,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "Booking details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating booking details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }
    
    
    

    























    

    
   





     
}
?>