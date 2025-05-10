<?php 
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';


if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
    return;
}


require_once $modelsPath;
require_once $headersPath;


function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}


$data = json_decode(file_get_contents('php://input'));


$requiredFields = ['id', 'name', 'email', 'phone', 'event', 'tickets', 'event_date', 'time', 'payment', 'price', 'status'];
foreach ($requiredFields as $field) {
    if (!isset($data->$field)) {
        handleResponse(400, "Missing required field: $field");
    }
}

$obj = new Put();


$result = $obj->functionbook(
    $data->id,
    $data->name,
    $data->email,
    $data->phone,
    $data->event,            
    $data->tickets,
    $data->event_date,      
    $data->time,
    $data->payment,
    $data->price,
    $data->status
);

// Send the result as a JSON response
echo json_encode($result);
?>
