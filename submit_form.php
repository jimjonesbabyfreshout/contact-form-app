<?php
// submit_form.php

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming the form fields are 'name', 'email', 'spoofedId', and 'message'
    $name = $_POST['name'];
    $email = $_POST['email'];
    $spoofedId = $_POST['spoofedId'];
    $message = $_POST['message'];

    // Perform any necessary validation or sanitization here

    // Simulate processing the form submission
    // In a real-world scenario, you would save the data to a database or send it via email
    $responseData = [
        'name' => $name,
        'message' => $message,
        'spoofedId' => $spoofedId
    ];

    // Send JSON response back to the client
    header('Content-Type: application/json');
    echo json_encode($responseData);
} else {
    // If the request method is not POST, return an error
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>