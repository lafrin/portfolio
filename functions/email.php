<?php
header('Content-Type: application/json');
$array = [
	['name' => 'apple', 'value' => '300'],
	['name' => 'grape', 'value' => '400'],
	['name' => 'pine', 'value' => '500']
];
echo json_encode($array,JSON_PRETTY_PRINT);
exit;

