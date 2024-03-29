<?php

$executionStartTime = microtime(true) / 1000;

if ($_REQUEST['capital'] === "Dili") {
    $_REQUEST['capital'] .= ", East-Timor";
} elseif ($_REQUEST['capital'] === "Saint-Denis") {
    $_REQUEST['capital'] .= ", Réunion";
} elseif ($_REQUEST['capital'] === "Plymouth") {
    $_REQUEST['capital'] = "Brades";
} elseif ($_REQUEST['capital'] === "Hamilton") {
    $_REQUEST['capital'] = "Hamilton, Bermuda";
}

$_REQUEST['capital'] = str_replace ( ' ', '%20', $_REQUEST['capital']);

$url= 'https://api.opencagedata.com/geocode/v1/json?q=' . $_REQUEST['capital'] .'&key=652c6ea5f8aa42ebbe4d3ebd48eed5fd&language=en&pretty=1&no_annotations=0&limit=2';

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);

$result=curl_exec($ch);

curl_close($ch);

$decode = json_decode($result,true);

if (isset($decode['results'][0]['components']['town'])) {

    $decode['results'][0]['components']['city'] = $decode['results'][0]['components']['town'];

} 

if ($_REQUEST['capital'] === "Stanley") {
    $decode['results'][0]['components']['city'] = "Stanley";
} elseif ($_REQUEST['capital'] === "Honiara") {
    $decode['results'][0]['components']['city'] = "Honiara";
}  elseif ($_REQUEST['capital'] === "Castries") {
    $decode['results'][0]['components']['city'] = "Castries";
}


$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "mission saved";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = $decode;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>