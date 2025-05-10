<?php 
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
    return;
}

// Include necessary files
require_once $modelsPath;
require_once $headersPath;

// Function to handle errors and send response
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Decode incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Check if the required fields are provided
$requiredFields = ['id', 'name', 'email', 'phone', 'event', 'tickets', 'event_date', 'time', 'payment', 'price', 'status'];
foreach ($requiredFields as $field) {
    if (!isset($data->$field)) {
        handleResponse(400, "Missing required field: $field");
    }
}

// Initialize the Put object
$obj = new Put();

// Call the method with the provided data
$result = $obj->enterbook(
    $data->id,
    $data->name,
    $data->email,
    $data->phone,
    $data->event,            // Corrected variable name
    $data->tickets,
    $data->event_date,       // Corrected variable name
    $data->time,
    $data->payment,
    $data->price,
    $data->status
);

// Send the result as a JSON response
echo json_encode($result);
?>
