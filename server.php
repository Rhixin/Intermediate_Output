<?php

$quizFile = 'data/quiz.json';

// Fetch quizzes (GET request)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($quizFile)) {
        $data = file_get_contents($quizFile);
        echo $data;
    } else {
        echo json_encode([]);
    }
    exit;
}

// Save quizzes (POST request)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $jsonData = file_get_contents('php://input');

    // Save the data to the quiz.json file
    if (file_put_contents($quizFile, $jsonData)) {
        echo json_encode(['message' => 'Quizzes saved successfully']);
    } else {
        echo json_encode(['message' => 'Failed to save quizzes']);
    }
    exit;
}