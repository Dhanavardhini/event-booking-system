<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    public function Register($username,$email,$password)
    {
         $insert = "INSERT INTO register(username,email,password)  VALUES (?,?, ?)";
         $stmt = mysqli_prepare($this->conn, $insert);
 
         if (!$stmt) {
             return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
         }
 
         mysqli_stmt_bind_param($stmt, "sss", $username,$email,$password);
         $result = mysqli_stmt_execute($stmt);
 
         if ($result) {
             return ["message" => "User Register successfully"];
         } else {
             return ["message" => "Product insertion failed"];
         }
    }
   
   

    public function ebook($name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status)
    {
        $insert = "INSERT INTO enterbook (name, email, phone, event, tickets, event_date, time, payment, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "ssssssssss", $name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status);
    
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    
    public function functionbook($name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status)
    {
        $insert = "INSERT INTO funbook (name, email, phone, event, tickets, event_date, time, payment, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "ssssssssss", $name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status);
    
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    



   
    


    public function entertainment($event_type, $event_date, $price, $event_status, $file)
    {
        $advertisementQuery = "INSERT INTO eventsimg (event_type, event_date, price, event_status, file) VALUES (?, ?, ?, ?, ?)";
        $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);
    
        if (!$stmtadvertisement) {
            return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
        }
    
       
        mysqli_stmt_bind_param($stmtadvertisement, 'sssss', $event_type, $event_date, $price, $event_status, $file);
    
        $advertisementExec = mysqli_stmt_execute($stmtadvertisement);
    
        if ($advertisementExec) {
            return "Data added successfully";
        } else {
            return "Failed to insert data into database: " . mysqli_error($this->conn);
        }
    }
    
    public function function($event_type, $event_date, $price, $event_status, $file)
    {
        $advertisementQuery = "INSERT INTO funimg (event_type, event_date, price, event_status, file) VALUES (?, ?, ?, ?, ?)";
        $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);
    
        if (!$stmtadvertisement) {
            return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
        }
    
       
        mysqli_stmt_bind_param($stmtadvertisement, 'sssss', $event_type, $event_date, $price, $event_status, $file);
    
        $advertisementExec = mysqli_stmt_execute($stmtadvertisement);
    
        if ($advertisementExec) {
            return "Data added successfully";
        } else {
            return "Failed to insert data into database: " . mysqli_error($this->conn);
        }
    }



























 





}
?> 
