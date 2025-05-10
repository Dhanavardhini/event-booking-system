<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Required files are missing']);
    exit();
}

require_once $modelsPath;
require_once $headersPath;


$data = json_decode(file_get_contents('php://input'), true);

// Validate JSON data
if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Debugging: Log the incoming data
error_log("Received Data: " . print_r($data, true));

// Extract the data from the decoded JSON
$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$phone = $data['phone'] ?? null;
$event = $data['event'] ?? null;
$tickets = $data['tickets'] ?? null;
$event_date = $data['event_date'] ?? $data['date'] ?? null; // Checking both 'event_date' and 'date'
$time = $data['time'] ?? null;
$payment = $data['payment'] ?? null;
$price = $data['price'] ?? null;
$status = $data['status'] ?? null;

// Ensure event_date is not null
if (!$event_date) {
    http_response_code(400);
    echo json_encode(['error' => 'Event date is required']);
    exit();
}

// Debugging: Log extracted values
error_log("Event Date: " . $event_date);

// Create an instance of the Post class
$obj = new Post();

// Insert data
$result = $obj->functionbook(
    $name, $email, $phone, $event, $tickets, $event_date, $time, $payment, $price, $status
);

// Handle errors
if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
    exit();
}


echo json_encode($result);
?>
