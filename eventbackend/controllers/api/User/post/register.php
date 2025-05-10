<?php
// echo "test1";
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleError(500, 'Required files are missing');
}

// Require the necessary files
require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Function to handle errors and send response
function handleError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

$obj = new Post();

// Insert achievement data
$result = $obj->Register($data->username, $data->email,$data->password);

// Handle errors
if ($result === false) {
    handleError(500, 'Internal server error');
}

// Send the result
echo json_encode($result);

?>
